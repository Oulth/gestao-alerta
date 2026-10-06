# Módulo Almoxarifado — Alerta Gestão de Resíduos

Documento de Especificação de Design e Arquitetura para o módulo Almoxarifado do sistema **Gestão Alerta**.

---

## 1. Visão Geral & Propósito

O módulo **Almoxarifado** é responsável pelo controle físico, quantitativo e financeiro de todos os suprimentos essenciais para a operação da Alerta (limpa fossa, caixa de gordura, desentupimento, hidrojateamento, transporte de efluentes para as ETEs da CAGECE e coleta de óleo lubrificante usado).

O módulo gerencia três macro-grupos de suprimentos divididos em 5 categorias operacionais:

1. **EPIs (Equipamentos de Proteção Individual):** luvas nitrílicas e de vaqueta, botas de PVC com biqueira de aço, máscaras PFF2 com carvão ativado, óculos de proteção, balaclavas e protetores auriculares (conformidade com a NR-6 e controle rigoroso de Certificado de Aprovação - CA).
2. **Materiais de Operação:** mangotes de sucção 3", mangueiras de hidrojateamento de alta pressão, conexões de engate rápido tipo camlock 3", ponteiras, abraçadeiras, químicos/desinfetantes de limpeza técnica e ferramentas operacionais manuais ou elétricas.
3. **Peças de Caminhão:** filtros (óleo, combustível, ar e separador Racor), óleos lubrificantes de motor e de bomba de vácuo, pneus e peças de desgaste mecânico rápido.

### Regras Centrais de Gestão

- **Depósito Central Único:** a Alerta opera com um **único depósito central** situado em sua base operacional em Fortaleza/CE. Não há subdivisão em múltiplos depósitos ou filiais.
- **Baixa Definitiva:** toda saída de material é tratada como consumo imediato e baixa definitiva de estoque. Não existem estoques intermediários, almoxarifados volantes ou "kits flutuantes" alocados permanentemente dentro de caminhões.
- **Público-alvo & Permissão:** Almoxarife, equipe de escritório e diretoria (`badge: Escritório e almoxarifado`).
- **Posição no Menu:** módulo já existente no menu lateral `{ id: 'almox', label: 'Almoxarifado', icon: 'package' }`, posicionado como último item do menu.
- **Padrão Visual:** Design System Alerta, com uso estrito de tokens CSS oficiais (`--teal-700`, `--teal-800`, `--teal-500`, `--lime-500`, `--lime-100`, `--forest-900`, `--amber-500`, `--amber-100`, `--amber-800`, `--danger`, `--gray-100`, `--gray-300`, `--text-muted`, etc.), sem aplicação de códigos hexadecimais soltos.
- **Interface Base:** tela única com navegação em abas internas no mesmo padrão da Logística (`LG_TABS`), com tabelas densas e filtros rápidos no desktop e visualização adaptativa em cards no celular. Sem uso de kanban.

---

## 2. Estrutura da Tela

### 2.1 Indicadores do Topo (KPIs)

Quatro cartões de indicadores de alta visibilidade com atualização reativa:

1. **Abaixo do mínimo:** contagem numérica total de itens cujo saldo atual é menor ou igual ao estoque mínimo de segurança ($\text{Saldo} \le \text{Mínimo}$). Quando houver itens nessa condição, o contador e o badge recebem destaque em `--amber-500` / `--amber-100`.
2. **Valor em estoque:** soma financeira total do inventário corrente calculada multiplicando o saldo de cada item pelo seu custo médio vigente ($\sum \text{Saldo} \times \text{Custo Médio}$), formatado em moeda nacional (`R$ 0.000,00`).
3. **Saídas no mês:** valor financeiro total de materiais baixados no mês corrente ($\sum \text{Quantidade} \times \text{Custo Unitário}$ das movimentações de saída), demonstrando o custo operacional de insumos consumidos.
4. **CAs vencendo em 30 dias:** contagem de itens de EPI cadastrados com Certificado de Aprovação (CA) cuja validade expira dentro dos próximos 30 dias a partir da data de referência, ou que já se encontram vencidos (destaque em `--danger` se houver vencidos).

### 2.2 Faixa Âmbar de Reposição ("Repor")

Exibida logo abaixo dos indicadores sempre que o indicador "Abaixo do mínimo" for maior que zero.

- **Estilo:** faixa de alerta com fundo `--amber-100`, borda esquerda `--amber-500` e texto `--amber-800`.
- **Conteúdo:** lista horizontal ou lista compacta com os itens em estado crítico (código, nome, saldo atual vs. estoque mínimo).
- **Ação Rápida:** cada item na faixa possui o botão contextual **"Registrar entrada"**, que abre diretamente o modal de movimentação já configurado na aba *Entrada* com o respectivo item pré-selecionado.

### 2.3 Barra de Ações Globais

Posicionada no canto superior direito do módulo:

- **+ Movimentação:** botão primário estilizado em Verde Abeto (`--teal-700`) para lançar entradas, saídas ou ajustes.
- **Exportar Excel:** botão secundário estilizado com borda suave (`--gray-300`). Gera e faz o download de um arquivo `.csv` utilizando separador ponto e vírgula (`;`), codificação UTF-8 com BOM (`\uFEFF`) e respeitando rigorosamente os filtros ativos e a aba selecionada no momento.

### 2.4 Abas Internas

O módulo conta com quatro abas internas de navegação no mesmo formato de segmented pills utilizado na Logística:

1. **Estoque:** visão completa do inventário, níveis de saldo, custos e ações por item.
2. **Movimentações:** histórico cronológico de todas as transações (entradas, saídas e ajustes).
3. **EPIs:** ficha de controle individual por colaborador em conformidade com a NR-6.
4. **Colaboradores:** cadastro interno de equipe com tamanhos de uniformes, calçados e equipamentos.

---

### 2.5 Aba 1: Estoque

Visualização tabular focada no controle de níveis de reposição, valorização de estoque e catálogo de itens.

#### Barra de Filtros

- **Busca textual:** busca em tempo real por código do item, descrição/nome ou fornecedor habitual.
- **Filtro de Categoria:** dropdown ou seletor com as opções: *Todas as categorias*, *EPI*, *Operação*, *Peça de caminhão*, *Químico-limpeza*, *Ferramenta*.
- **Filtro de Status:** seletor rápido com contadores: *Todos*, *OK*, *Baixo*, *Zerado*.
- **Ação Contextual:** botão **+ Novo item** para cadastrar novos produtos no catálogo.
- **Estado sem resultado:** caso nenhum item satisfaça os filtros, exibe mensagem amigável: *"Nenhum item neste filtro"* acompanhada do botão de ação rápida **Limpar filtros**.

#### Tabela de Estoque (Desktop)

| Coluna | Conteúdo / Formato | Alinhamento |
| :--- | :--- | :--- |
| **Código** | Identificador padrão (`EPI-001`, `MAT-014`, `PEC-003`, etc.) | Esquerda |
| **Item** | Nome do item e especificação técnica | Esquerda |
| **Categoria** | Badge de categoria (`EPI`, `Operação`, `Peça de caminhão`, `Químico-limpeza`, `Ferramenta`) | Esquerda |
| **Saldo** | Quantidade em estoque + unidade de medida (ex.: `12 par`, `4 un`, `120 L`, `50 m`) | Direita |
| **Mínimo** | Estoque mínimo de segurança + unidade (ex.: `10 par`, `5 un`) | Direita |
| **Custo médio** | Valor monetário médio ponderado (`R$ 0,00`) | Direita |
| **Valor total** | $\text{Saldo} \times \text{Custo Médio}$ formatado em `R$ 0.000,00` | Direita |
| **Fornecedor** | Fornecedor preferencial habitual | Esquerda |
| **Status** | Badge semântica de nível de estoque (regras abaixo) | Centro |
| **Ações** | Menu contextual `⋯` com opções: *Registrar entrada*, *Registrar saída*, *Ajustar saldo*, *Editar item* | Centro |

#### Regras de Status do Item

| Status | Condição | Badge (Fundo / Texto) | Significado Operacional |
| :--- | :--- | :--- | :--- |
| **OK** | $\text{Saldo} > \text{Mínimo}$ | `--lime-100` / `--teal-800` (discreto) | Estoque operando em faixa segura |
| **Baixo** | $0 < \text{Saldo} \le \text{Mínimo}$ | `--amber-100` / `--amber-800` | Necessita reposição de compra |
| **Zerado** | $\text{Saldo} = 0$ | `--danger` / `--white` | Item esgotado; risco imediato à operação |

#### Adaptação Mobile

Em telas menores que 768 px, a tabela se transforma em uma listagem de cards verticais. Cada card apresenta:
- Cabeçalho com código, nome do item e badge de status no canto direito.
- Linha de categoria e fornecedor habitual.
- Destaque numérico com o saldo atual em fonte de tamanho ampliado acompanhado da unidade de medida e do estoque mínimo.
- Valor total estocado e custo médio.
- Botões de ação rápida no rodapé do card: **Entrada**, **Saída** e menu `⋯`.

---

### 2.6 Aba 2: Movimentações

Auditoria completa e histórico transacional de qualquer alteração física no estoque da Alerta.

#### Barra de Filtros

- **Tipo de Movimento:** seletor entre *Todos*, *Entradas*, *Saídas*, *Ajustes*.
- **Período:** atalhos *Hoje*, *7 dias*, *30 dias*, *60 dias* e *Personalizado*.
- **Item:** seletor com busca por código ou nome do material.
- **Destino / Origem:** seletor agrupado por *Todos*, *Ordens de Serviço*, *Caminhões*, *Colaboradores*, *Fornecedores*.

#### Tabela de Histórico de Movimentações

| Coluna | Conteúdo / Formato | Exemplo |
| :--- | :--- | :--- |
| **Nº** | Identificador sequencial com prefixo de tipo | `#E-012` (Entrada), `#S-034` (Saída), `#A-003` (Ajuste) |
| **Data** | Data da operação em formato `DD/MM/AAAA` | `05/10/2026` |
| **Tipo** | Badge visual com identificação de operação | `Entrada` (`--lime-500`), `Saída` (`--teal-700`), `Ajuste` (`--amber-500`) |
| **Item** | Código e descrição do produto movimentado | `MAT-001 · Mangote de sucção 3"` |
| **Qtd** | Quantidade movimentada com sinal indicativo e unidade | `+ 2 un`, `- 1 par`, `+ 5 L` |
| **Custo unit.** | Custo unitário praticado na movimentação | `R$ 480,00` |
| **Total** | Valor financeiro total da transação ($\text{Qtd} \times \text{Custo Unit.}$) | `R$ 960,00` |
| **Destino / Origem** | Vínculo de rastreamento com link navegável | Fornecedor + NF (Entrada); OS `#1046` (Saída OS); Placa `PMQ-4819` (Caminhão); Colaborador `Carlos Eduardo` (EPI) |
| **Responsável** | Nome do colaborador ou almoxarife que registrou a ação | `Cláudio Almoxarife` |

---

### 2.7 Aba 3: EPIs (Controle NR-6)

Interface especializada no controle jurídico e operacional de fornecimento de EPIs, garantindo conformidade com a Norma Regulamentadora NR-6 do Ministério do Trabalho e Emprego.

#### Seleção de Colaborador

- Seletor de busca ou barra lateral com a lista dos colaboradores ativos da Alerta (motoristas e ajudantes de campo).
- Painel superior com o perfil do colaborador selecionado:
  - Nome completo e função.
  - Grade de medidas: tamanho de bota (ex.: `41`), tamanho de luva (ex.: `G`) e uniforme (ex.: `GG`).
  - Caminhão habitual escalado (ex.: `NQZ-7814`).
  - Total de EPIs atualmente sob custódia do colaborador.

#### Ficha de Equipamentos Entregues

Tabela demonstrativa de todos os EPIs fornecidos ao colaborador:

| Coluna | Conteúdo | Regra / Destaque |
| :--- | :--- | :--- |
| **Data da entrega** | `DD/MM/AAAA` da saída registrada | Data em que o colaborador retirou o equipamento |
| **EPI / Descrição** | Nome e especificação do equipamento | Ex.: `Luva nitrílica cano longo`, `Bota de PVC cano médio` |
| **Nº do CA** | Número do Certificado de Aprovação (MTE) | Registro obrigatório de homologação técnica |
| **Validade do CA** | Data limite de validade do CA do fabricante | Se $Data < Hoje$, badge em `--danger` (**Vencido**) |
| **Vida útil (dias)** | Periodicidade de desgaste técnico esperado | Ex.: `90 dias` (luvas), `180 dias` (botas) |
| **Próxima troca** | Data da entrega $+$ Vida útil em dias | Se $Data < Hoje$, destaque em `--amber-500` (**Troca atrasada**) |
| **Status** | Indicador de conformidade | **Em dia** (`--lime-500`), **Troca pendente** (`--amber-500`), **CA irregular** (`--danger`) |

#### Ação "Imprimir Ficha de EPI"

- Botão no cabeçalho da aba que formata e abre a janela de impressão da **Ficha Individual de Entrega e Controle de EPI** (termo legal de responsabilidade).
- Layout de impressão padronizado contendo:
  - Logotipo oficial da Alerta Gestão de Resíduos e CNPJ institucional.
  - Dados completos do trabalhador (nome, função, data de admissão e medidas).
  - Tabela com todos os itens recebidos, data de entrega, número do CA e fabricante.
  - Texto legal de compromisso conforme a NR-6 (guarda, conservação e uso obrigatório).
  - Campos para assinatura física datada do colaborador e do responsável pelo almoxarifado.

---

### 2.8 Aba 4: Colaboradores

Cadastro enxuto de pessoal operacional focado no dimensionamento de estoque, compras de reposição e fornecimento de uniformes/calçados.

#### Estrutura do Cadastro

- **Nome Completo:** identificação do colaborador (ex.: `Carlos Eduardo`, `Valdir Sobrinho`, `Antônio Ferreira`).
- **Função:** seletor com opções *Motorista*, *Ajudante*, *Escritório*, *Outro*.
- **Tamanho de Bota:** numeração do calçado de segurança (ex.: `39`, `40`, `41`, `42`, `43`, `44`).
- **Tamanho de Luva:** especificação dimensional (`P`, `M`, `G`, `GG`).
- **Tamanho de Uniforme:** tamanho padrão de vestimenta operacional (`P`, `M`, `G`, `GG`, `XG`).
- **Caminhão Habitual:** vínculo preferencial com veículo da frota ativa (ex.: `NQZ-7814 · Atego 1729`) ou *"Nenhum"*.
- **Status:** indicador *Ativo* ou *Inativo*.

#### Tabela de Colaboradores

- Tabela rápida com busca por nome e filtro por função.
- Exibe as medidas de cada colaborador de forma imediata para facilitar compras em lote de botas e luvas junto à *Casa do EPI*.
- Ações: **+ Novo colaborador** e edição de cadastros existentes.
- *Nota sobre escopo:* este cadastro opera internamente no Almoxarifado nesta versão. A sincronização automática bidirecional com a lista de motoristas da Logística e das OSs está mapeada como evolução futura (§9).

---

## 3. Modelo de Dados (Estado do Protótipo)

O estado reativo do protótipo no `index.html` armazena as estruturas de almoxarifado nas seguintes coleções JavaScript:

### 3.1 Interface de Entidades

```typescript
// Catálogo de itens e produtos
interface ItemAlmox {
  id: string;               // Identificador interno (ex: 'item-1')
  codigo: string;           // Código de estoque (ex: 'EPI-001', 'MAT-002', 'PEC-005')
  nome: string;             // Nome do item (ex: 'Luva de borracha nitrílica cano longo')
  categoria: 'EPI' | 'Operação' | 'Peça de caminhão' | 'Químico-limpeza' | 'Ferramenta';
  unidade: 'un' | 'par' | 'm' | 'L' | 'kg' | 'cx';
  minimo: number;           // Nível mínimo de segurança para reposição
  custoMedio: number;       // Custo médio ponderado calculado (R$)
  fornecedor: string;       // Fornecedor preferencial habitual
  ca?: string;              // Número do Certificado de Aprovação (específico para EPI)
  caValidade?: string;      // Validade do CA em formato ISO 'YYYY-MM-DD'
  vidaUtilDias?: number;    // Dias úteis estimados para troca (específico para EPI)
  ativo: boolean;           // Flag de ativação no catálogo
}

// Histórico de movimentações de estoque
interface MovAlmox {
  id: string;               // Identificador interno (ex: 'mov-1')
  num: string;              // Código da movimentação: '#E-012', '#S-034', '#A-003'
  tipo: 'entrada' | 'saida' | 'ajuste';
  data: string;             // Data da operação em formato ISO 'YYYY-MM-DD'
  itemId: string;           // Referência ao id do item movimentado
  qtd: number;              // Quantidade movimentada (sempre > 0)
  custoUnit: number;        // Custo unitário aplicado na operação (R$)
  destinoTipo?: 'os' | 'caminhao' | 'colab'; // Origem/destino para saídas
  destinoId?: string | number; // Número da OS (#1046), Placa ('PMQ-4819') ou ID do Colaborador
  fornecedor?: string;      // Fornecedor da compra (para entradas)
  nf?: string;              // Número da Nota Fiscal (para entradas)
  motivo?: string;          // Motivo obrigatório em caso de tipo 'ajuste'
  responsavel: string;      // Nome do responsável pela operação
}

// Cadastro de colaboradores para controle de medidas e EPIs
interface ColabAlmox {
  id: string;               // Identificador interno (ex: 'colab-1')
  nome: string;             // Nome completo do colaborador
  funcao: 'Motorista' | 'Ajudante' | 'Escritório' | 'Outro';
  bota: string;             // Numeração de bota (ex: '41')
  luva: string;             // Tamanho de luva (ex: 'G')
  uniforme: string;         // Tamanho de uniforme (ex: 'G')
  caminhao: string;         // Placa do caminhão habitual ou 'Nenhum'
  ativo: boolean;           // Colaborador ativo ou inativo
}
```

### 3.2 Saldo Derivado

O saldo em estoque de qualquer item **nunca é persistido manualmente ou de forma estática**. O saldo é estritamente uma propriedade computada derivada do somatório de todas as movimentações registradas para aquele item:

$$\text{Saldo Atual}(itemId) = \sum \text{Entradas}(itemId) - \sum \text{Saídas}(itemId) \pm \sum \text{Ajustes}(itemId)$$

Isso elimina divergências de sincronização e garante rastreabilidade contábil absoluta.

### 3.3 Regra de Custo Médio Ponderado

O valor do custo médio de cada item é atualizado exclusivamente nas operações de **Entrada**, de acordo com a fórmula do Custo Médio Ponderado:

$$\text{Novo Custo Médio} = \frac{(\text{Saldo Anterior} \times \text{Custo Médio Anterior}) + (\text{Qtd Entrada} \times \text{Custo Unitário da Entrada})}{\text{Saldo Anterior} + \text{Qtd Entrada}}$$

- **Nas operações de Saída:** o custo unitário adotado na movimentação é obrigatoriamente o **Custo Médio vigente**. O custo médio do item não se altera na saída, apenas o valor financeiro total em estoque é reduzido.
- **Nas operações de Ajuste:**
  - Ajuste positivo (sobra em inventário): o novo estoque absorve a quantidade mantendo o custo médio vigente.
  - Ajuste negativo (perda, avaria ou quebra): reduz a quantidade física computando o prejuízo pelo custo médio vigente, sem alterar o custo unitário médio do saldo remanescente.

### 3.4 Seed de Dados de Demonstração

Para manter o protótipo realista e demonstrar todos os casos de uso, a carga inicial de dados contempla:

1. **Catálogo de 20 Itens:**
   - *EPI:*
     - `EPI-001` Luva nitrílica cano longo (Casa do EPI, Saldo: 18 par, Mínimo: 10 par, Custo: R$ 22,00, CA: 38240, Validade: 2027-11-15, Vida útil: 45 dias)
     - `EPI-002` Bota de PVC cano médio com biqueira (Casa do EPI, Saldo: 4 par, Mínimo: 6 par, Custo: R$ 78,00, **Status: Baixo**, CA: 41200, Validade: 2028-04-10, Vida útil: 180 dias)
     - `EPI-003` Máscara respiratória semifacial PFF2 c/ carvão (Casa do EPI, Saldo: 25 un, Mínimo: 15 un, Custo: R$ 14,50, CA: 35120, **Validade CA: 2026-10-25 - Vencendo em 20 dias**, Vida útil: 15 dias)
     - `EPI-004` Óculos de proteção ampla visão antiembaçante (Casa do EPI, Saldo: 12 un, Mínimo: 8 un, Custo: R$ 28,00, CA: 42310, Validade: 2027-08-30, Vida útil: 120 dias)
     - `EPI-005` Capuz balaclava térmica/resíduos (Casa do EPI, Saldo: 8 un, Mínimo: 5 un, Custo: R$ 19,00, CA: 39180, Validade: 2027-06-20, Vida útil: 90 dias)
   - *Operação:*
     - `MAT-001` Mangote de sucção 3" espiralado laranja (Hidráulica Nordeste, Saldo: 3 un de 6m, Mínimo: 2 un, Custo: R$ 520,00)
     - `MAT-002` Conexão engate rápido camlock 3" fêmea em alumínio (Hidráulica Nordeste, Saldo: 1 un, Mínimo: 4 un, **Status: Baixo**, Custo: R$ 145,00)
     - `MAT-003` Conexão camlock 3" macho em alumínio (Hidráulica Nordeste, Saldo: 5 un, Mínimo: 4 un, Custo: R$ 115,00)
     - `MAT-004` Mangueira de hidrojateamento 1/2" 250 bar (Hidráulica Nordeste, Saldo: 2 un de 50m, Mínimo: 2 un, Custo: R$ 1.850,00)
     - `MAT-005` Abraçadeira de alta pressão T-Bolt 3" inox (Hidráulica Nordeste, Saldo: 14 un, Mínimo: 10 un, Custo: R$ 38,00)
   - *Peças de Caminhão:*
     - `PEC-001` Filtro de óleo lubrificante motor Mercedes/Atego (Mecânica São Cristóvão, Saldo: 6 un, Mínimo: 4 un, Custo: R$ 95,00)
     - `PEC-002` Filtro separador de água e diesel Racor (Mecânica São Cristóvão, Saldo: 0 un, Mínimo: 3 un, **Status: Zerado**, Custo: R$ 130,00)
     - `PEC-003` Óleo mineral 15W40 para motor diesel (Ipiranga Lubrificantes CE, Saldo: 80 L, Mínimo: 40 L, Custo: R$ 28,50)
     - `PEC-004` Óleo lubrificante ISO VG 100 para bomba de vácuo (Ipiranga Lubrificantes CE, Saldo: 15 L, Mínimo: 20 L, **Status: Baixo**, Custo: R$ 42,00)
     - `PEC-005` Pneu 275/80 R22.5 liso direcional (Pneus Fortaleza, Saldo: 2 un, Mínimo: 2 un, Custo: R$ 2.450,00)
   - *Químico e Limpeza:*
     - `QUI-001` Neutralizador químico de odores concentrado (QuimiFort Fortaleza, Saldo: 60 L, Mínimo: 30 L, Custo: R$ 34,00)
     - `QUI-002` Desengraxante biodegradável solúvel (QuimiFort Fortaleza, Saldo: 45 L, Mínimo: 25 L, Custo: R$ 26,00)
     - `QUI-003` Hipoclorito de sódio 12% desinfecção (QuimiFort Fortaleza, Saldo: 100 L, Mínimo: 50 L, Custo: R$ 8,50)
   - *Ferramentas:*
     - `FER-001` Ponteira desobstruidora rotativa p/ hidrojato 1/2" (Hidráulica Nordeste, Saldo: 3 un, Mínimo: 2 un, Custo: R$ 480,00)
     - `FER-002` Chave de tubo tipo Stillson 24" pesada (Ferragens Ceará, Saldo: 2 un, Mínimo: 2 un, Custo: R$ 210,00)
2. **Histórico de ~30 Movimentações:** distribuídas nos últimos 60 dias, incluindo:
   - Entradas com NF emitidas pela Casa do EPI, Hidráulica Nordeste e QuimiFort.
   - Saídas para Ordens de Serviço reais registradas no protótipo (`#1038 Posto Shell`, `#1043 Restaurante Coco Bambu`, `#1046`).
   - Saídas de filtros e óleo de vácuo para caminhões em manutenção preventiva (`PMQ-4819 Cargo 1722`, `NQZ-7814 Atego 1729`).
   - Saídas de EPIs para os colaboradores operacionais com rastreamento de entregas.
   - Ajustes de inventário com justificativa formal registrada.
3. **6 Colaboradores Cadastrados:**
   - Carlos Eduardo (Motorista, Bota: 42, Luva: G, Uniforme: G, Caminhão: `NQZ-7814`, Ativo)
   - Valdir Sobrinho (Motorista, Bota: 41, Luva: M, Uniforme: M, Caminhão: `PNB-4310`, Ativo)
   - Marcelo Paz (Motorista, Bota: 43, Luva: GG, Uniforme: GG, Caminhão: `ORS-3098`, Ativo)
   - Francisco Lima (Motorista, Bota: 40, Luva: M, Uniforme: M, Caminhão: `OIH-9920`, Ativo)
   - Antônio Ferreira (Ajudante, Bota: 41, Luva: G, Uniforme: G, Caminhão: `NQZ-7814`, Ativo)
   - Rafael Souza (Ajudante, Bota: 42, Luva: G, Uniforme: GG, Caminhão: `PNB-4310`, Ativo)

---

## 4. Catálogo de Ações & Modais

### 4.1 Modal de Movimentação (`almoxModal: 'mov'`)

Modal centralizado com Segmented Control no topo para alternar dinamicamente entre os modos **Entrada**, **Saída** e **Ajuste**.

#### Modo 1: Entrada de Material

- **Campos do Formulário:**
  - Item (select com busca textual, exibindo código, nome e saldo atual).
  - Quantidade a receber (numérico $> 0$ acompanhado da unidade do item).
  - Custo unitário de aquisição (moeda `R$ 0,00`).
  - Fornecedor (select com fornecedores cadastrados ou entrada livre).
  - Número da Nota Fiscal (texto, ex.: `NF-e 48190`).
  - Data de vencimento da fatura (data no formato `YYYY-MM-DD`).
  - Forma de pagamento (`Boleto Bancário`, `PIX`, `Cartão`, `Transferência Bancária`).
  - Checkbox **"Gerar conta a pagar no Financeiro"** (marcado por padrão).
- **Processamento ao Salvar:**
  1. Valida quantidade $> 0$ e custo unitário $> 0$.
  2. Gera ID de movimentação com código sequencial no formato `#E-xxx` (ex.: `#E-024`).
  3. Recalcula o Custo Médio Ponderado do item conforme a fórmula descrita em §3.3.
  4. Se o checkbox estiver marcado: cria instantaneamente um título no módulo Financeiro chamando a rotina interna `P()`:
     ```javascript
     P({
       nome: form.fornecedor,
       desc: `Entrada almox ${novoNum} · ${item.nome}`,
       cat: 'Peças/almoxarifado',
       emissao: HOJE,
       venc: form.venc || HOJE,
       forma: form.forma || 'Boleto',
       valor: form.qtd * form.custoUnit
     });
     ```
  5. Emite notificação Toast: *"Entrada #E-xxx registrada com sucesso"*.

#### Modo 2: Saída de Material (Baixa Operacional)

- **Campos do Formulário:**
  - Item (select com busca, destacando saldo disponível para saque).
  - Quantidade a retirar (numérico $> 0$).
  - Custo unitário (campo somente leitura exibindo o custo médio ponderado vigente do item).
  - Tipo de Destino (radio ou select com opções: `Ordem de Serviço (OS)`, `Caminhão (Frota)`, `Colaborador`).
  - Seleção contextual conforme o destino:
    - *Se OS:* dropdown listando as ordens de serviço ativas/recentes (ex.: `#1046 · Restaurante Camarões`, `#1038 · Posto Shell Aldeota`).
    - *Se Caminhão:* dropdown com os 10 veículos da frota Alerta (placa e modelo).
    - *Se Colaborador:* dropdown com os colaboradores ativos. **Obrigatório quando o item for da categoria EPI**.
- **Processamento ao Salvar:**
  1. Valida se a quantidade solicitada é $\le$ ao saldo disponível em estoque. Em caso de insuficiência, bloqueia o envio com alerta inline.
  2. Se a categoria for `EPI`, valida obrigatoriedade de seleção de um colaborador.
  3. Gera registro de movimentação com código sequencial no formato `#S-xxx` (ex.: `#S-045`), associando o custo total ($\text{Qtd} \times \text{Custo Médio}$).
  4. Executa os vínculos de integração automáticos (§5).
  5. Emite notificação Toast: *"Saída #S-xxx registrada com sucesso"*.

#### Modo 3: Ajuste de Estoque (Inventário / Aferição)

- **Campos do Formulário:**
  - Item (select com busca).
  - Saldo atual no sistema (somente leitura, derivado das movimentações).
  - Nova contagem física apurada (numérico $\ge 0$).
  - Variação apurada em tempo real ($\Delta = \text{Nova Contagem} - \text{Saldo Atual}$).
  - Motivo do ajuste (**campo obrigatório**, opções: *Inventário periódico*, *Divergência de contagem*, *Material avariado/quebra*, *Validade de produto expirada*, *Outro*).
  - Observações adicionais (texto descritivo).
- **Processamento ao Salvar:**
  1. Valida obrigatoriedade de seleção de motivo e cálculo da diferença.
  2. Gera movimentação com código sequencial no formato `#A-xxx` (ex.: `#A-004`).
  3. Registra a quantidade de ajuste positiva ou negativa mantendo o custo médio inalterado.
  4. Emite notificação Toast: *"Ajuste de estoque #A-xxx registrado com sucesso"*.

---

### 4.2 Modal de Cadastro de Item (`almoxModal: 'item'`)

Utilizado para inclusão (`almoxModal: 'novoItem'`) e edição (`almoxModal: 'editarItem'`) de insumos.

- **Campos Gerais:**
  - Código (ex.: `EPI-006`, `MAT-015`).
  - Nome / Descrição do item (ex.: `Luva de vaqueta mista cano curto`).
  - Categoria (`EPI`, `Operação`, `Peça de caminhão`, `Químico-limpeza`, `Ferramenta`).
  - Unidade de medida (`un`, `par`, `m`, `L`, `kg`, `cx`).
  - Estoque mínimo de segurança (quantidade).
  - Fornecedor habitual preferencial.
  - Flag de status (`Ativo` / `Inativo`).
- **Campos Específicos para Categoria EPI (condicionais):**
  - Número do Certificado de Aprovação (CA).
  - Data de validade do CA (`YYYY-MM-DD`).
  - Vida útil estimada em dias para troca preventiva (ex.: 45, 90, 180 dias).
- **Regra de Exclusão vs. Inativação:**
  - Um item que já possua saldo $> 0$ ou qualquer histórico de movimentação registrado no sistema **não pode ser excluído**.
  - A tentativa de exclusão exibe aviso orientando a **inativação** do produto, garantindo a integridade dos históricos de ordens de serviço, manutenções e auditorias fiscais.

---

### 4.3 Modal de Colaborador (`almoxModal: 'colab'`)

Formulário para inclusão ou edição de dados dos membros operacionais da Alerta.

- **Campos:**
  - Nome completo (texto obrigatório).
  - Função operacional (*Motorista*, *Ajudante*, *Escritório*, *Outro*).
  - Medida de bota (calçado numérico: 38 a 45).
  - Medida de luva (`P`, `M`, `G`, `GG`).
  - Tamanho de uniforme operacional (`P`, `M`, `G`, `GG`, `XG`).
  - Caminhão habitual (seletor dos caminhões da frota ativa ou *Nenhum*).
  - Situação (*Ativo* / *Inativo*).

---

## 5. Integrações do Sistema

O módulo Almoxarifado opera perfeitamente conectado aos módulos já consolidados da plataforma Gestão Alerta:

### 5.1 Integração com Ordens de Serviço (OS)

Quando uma movimentação de saída é lançada com destino `Ordem de Serviço (OS)` (ex.: OS `#1046`):

- O modal de **Detalhe da OS** ganha automaticamente um bloco de custos internos intitulado:  
  **"Materiais usados: R$ X,XX"**, exibindo a relação discriminada de produtos consumidos (ex.: *1x Conexão Camlock 3" · R$ 145,00*, *2L Neutralizador · R$ 68,00*).
- **Diretriz de Negócio Rigorosa:** Esse custo é estritamente de consumo interno. Ele **NÃO** altera o valor cobrado do cliente, nem recalcula o faturamento da OS. Sua finalidade é subsidiar a futura apuração de margem de contribuição líquida da execução de campo.

### 5.2 Integração com o Módulo Financeiro

Quando uma movimentação de entrada é confirmada com a flag "Gerar conta a pagar" ativada:

- Dispara a função nativa do Financeiro:
  `P({ nome: fornecedor, desc: 'Entrada almox #E-xxx · ' + item.nome, cat: 'Peças/almoxarifado', emissao: HOJE, venc: dataVenc, valor: total, forma: formaPgto })`.
- A conta a pagar passa a integrar imediatamente a aba unificada *A receber e a pagar* e as análises de centros de custo da aba *Despesas* sob a categoria oficial **Peças/almoxarifado** (estilizada com o token `--gray-300`).

### 5.3 Integração com Logística › Manutenção da Frota

Quando uma saída de material for da categoria **"Peça de caminhão"** e o destino for um veículo da frota (ex.: placa `PMQ-4819`):

- Um novo registro é inserido automaticamente no array `lg.manut` da aba *Manutenção* da Logística:
  ```javascript
  {
    item: `Peça aplicada: ${item.nome} · ${brl(valorTotal)}`,
    ref: `${caminhao.placa} · ${caminhao.modelo}`,
    prazo: `Aplicado em ${fmtData(HOJE)}`,
    status: 'Em dia',
    tone: 'success-soft',
    pend: false
  }
  ```
- O registro possui caráter informativo e status preventivo resolvido (`pend = false`), fornecendo à equipe de logística visibilidade imediata de peças mecânicas ou óleos destinados àquele veículo sem exigir retrabalho de digitação.

### 5.4 Integração com Controle de EPIs (NR-6)

- Toda saída com categoria `EPI` exige obrigatoriamente a seleção de um colaborador.
- A baixa adiciona automaticamente o equipamento à **Ficha de EPI** do colaborador correspondente na Aba 3.
- O sistema computa a data prevista para a próxima troca ($\text{Data da Saída} + \text{vidaUtilDias}$) e vincula a validade do Certificado de Aprovação (CA) vigente no momento da entrega.

---

## 6. Validações e Estados de Erro

Para assegurar consistência operacional e evitar divergências de dados:

1. **Quantidade Inválida ($\le 0$):**
   - O formulário bloqueia a submissão exibindo mensagem de erro inline em `--danger`:  
     *"A quantidade movimentada deve ser maior que zero."*
2. **Saldo Insuficiente na Saída:**
   - Bloqueio imediato na tentativa de baixa com mensagem de erro em `--danger`:  
     *"Saldo insuficiente para esta saída (disponível em estoque: N <unidade>)."*
3. **EPI sem CA Informado:**
   - Exibe alerta de aviso em `--amber-500`: *"Atenção: item de proteção individual sem CA cadastrado."*  
   - Não bloqueia o salvamento para permitir cadastro provisório de itens em processo de homologação pelo MTE.
4. **Ajuste sem Justificativa:**
   - O campo de motivo é de preenchimento compulsório nas aferições de estoque. Caso vazio, impede a gravação com mensagem em `--danger`:  
     *"Selecione o motivo do ajuste de estoque."*
5. **Tentativa de Exclusão de Item com Histórico:**
   - Bloqueio por validação de integridade referencial:  
     *"Este item possui saldo ou histórico de movimentações e não pode ser excluído. Utilize a opção Inativar."*
6. **Notificações de Sucesso:**
   - Toda operação realizada com sucesso aciona o componente oficial de `Toast` do sistema no canto superior, exibindo mensagem descritiva (ex.: *"Movimentação #S-035 gravada com sucesso"*).

---

## 7. Acessibilidade & Responsividade

O módulo Almoxarifado adota os padrões rigorosos de acessibilidade e design responsivo especificados no Design System da Alerta:

### 7.1 Acessibilidade (A11y)

- **Semântica HTML:** tabelas estruturadas com cabeçalhos `<th scope="col">` e células alinhadas de acordo com a natureza da informação (texto à esquerda, métricas numéricas à direita).
- **Navegação por Teclado:** todas as linhas de tabelas e cards recebem `tabindex="0"`, permitindo navegação via tecla `Tab` e abertura de detalhes ou menus contextuais com `Enter` ou `Espaço`.
- **Foco Visível:** anéis de foco bem definidos utilizando o token `--teal-700` (`box-shadow: 0 0 0 2px var(--teal-700)`).
- **Contraste de Cores:** todos os badges de status atendem à taxa mínima de contraste de 4.5:1 exigida pelas diretrizes WCAG 2.1 AA.
- **Regiões Vivas (`aria-live="polite"`):** notificações de alterações de saldo e toasts de sucesso são anunciados para tecnologias assistivas sem interromper o fluxo do usuário.

### 7.2 Responsividade

- **Desktop ($\ge 1024$ px):** layout de alta densidade de dados com tabela completa, filtros horizontais em linha única e cards de indicadores dispostos em grade de 4 colunas.
- **Tablet ($768$ px a $1023$ px):** indicadores em grade de 2x2 colunas, barra de rolagem horizontal suave com cabeçalho fixo na tabela e filtros colapsáveis.
- **Celular ($< 768$ px):**
  - Indicadores organizados em carrossel ou grade de 2 colunas com tipografia adaptada.
  - Substituição automática das tabelas por listagem de cards verticais com hierarquia visual clara.
  - Modais ocupando a totalidade da tela (*full-screen view*) ou padrão *bottom sheet*, garantindo facilidade de preenchimento e clique em telas de toque.

---

## 8. Critérios de Aceitação & Roteiro de Teste Manual

Roteiro de validação manual para garantia da qualidade na entrega do módulo:

| Passo | Ação do Testador | Resultado Esperado |
| :---: | :--- | :--- |
| **1** | Acessar o sistema `index.html` e clicar em **Almoxarifado** no menu lateral. | O módulo deve carregar exibindo os 4 KPIs no topo, a faixa de reposição (se houver itens críticos) e as 4 abas internas. |
| **2** | Alternar entre as abas *Estoque*, *Movimentações*, *EPIs* e *Colaboradores*. | A navegação em abas deve ser instantânea, com o visual e as tabelas correspondentes renderizados sem falhas. |
| **3** | Redimensionar a janela do navegador para largura móvel ($< 768$ px). | As tabelas de estoque e movimentações devem se transformar em cards verticais legíveis, com botões de ação acessíveis ao toque. |
| **4** | Clicar em **+ Movimentação**, selecionar modo **Entrada**, preencher item `EPI-001`, quantidade `10`, custo unitário `R$ 25,00` e marcar "Gerar conta a pagar". | Saldo deve aumentar em 10; custo médio deve ser recalculado pela média ponderada; movimento `#E-xxx` deve constar no histórico; e uma nova conta a pagar deve constar no módulo Financeiro na categoria `Peças/almoxarifado`. |
| **5** | Clicar em **+ Movimentação**, selecionar modo **Saída**, escolher `MAT-001`, quantidade `1`, destino `Ordem de Serviço` e selecionar OS `#1046`. | Saldo deve diminuir em 1; movimentação `#S-xxx` deve ser gravada; e ao abrir os detalhes da OS `#1046`, o bloco "Materiais usados" deve exibir o item e valor sem alterar o total cobrado do cliente. |
| **6** | Lançar saída de uma peça (`PEC-001`) direcionada ao caminhão `PMQ-4819`. | A baixa é efetuada no estoque e um registro de manutenção preventiva informando a peça aplicada deve surgir em Logística › Manutenção (`lg.manut`). |
| **7** | Tentar registrar saída com quantidade maior do que o saldo em estoque. | O sistema deve bloquear a operação e exibir mensagem inline de erro: *"Saldo insuficiente (disponível em estoque: N <unidade>)"*. |
| **8** | Registrar saída de 1 par de `EPI-001` selecionando o colaborador `Carlos Eduardo`. | A saída deve ser salva e a entrega deve constar imediatamente na ficha individual do colaborador na aba *EPIs*, com prazo de próxima troca calculado. |
| **9** | Clicar no botão **Exportar Excel** na aba Estoque e na aba Movimentações. | O navegador deve baixar um arquivo `.csv` codificado em UTF-8 com BOM, separado por ponto e vírgula, refletindo os filtros aplicados na tela. |

---

## 9. Fora de Escopo & Evoluções Futuras

Para assegurar o foco no escopo acordado da versão atual, os seguintes pontos foram formalmente definidos como **fora de escopo**:

1. **Múltiplos Depósitos:** o sistema não contempla filiais ou depósitos descentralizados; toda a gestão opera sobre o depósito central da base de Fortaleza/CE.
2. **Kits e Almoxarifado Volante nos Caminhões:** não há controle de estoque mantido dentro dos veículos; toda retirada para veículo ou OS é considerada baixa definitiva imediata.
3. **Cobrança Adicional de Materiais ao Cliente:** os insumos consumidos nas OSs não são faturados à parte para o cliente final, integrando apenas o controle interno de custos da Alerta.
4. **Sincronização Bidirecional do Cadastro de Colaboradores:** nesta fase, a aba *Colaboradores* mantém cadastro local voltado a medidas de EPI/uniforme, não substituindo o cadastro geral de motoristas e ajudantes de Logística/OS (previsto para integração unificada em versão futura).
5. **Automação por Código de Barras / RFID:** leitura ótica em tempo real via leitor laser ou RFID não faz parte do protótipo atual, mantendo-se a busca manual por código alfanumérico e texto.
