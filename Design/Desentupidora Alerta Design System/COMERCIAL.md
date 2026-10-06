# Módulo Comercial — Alerta Gestão de Resíduos

Documento de Especificação de Design e Arquitetura para o módulo Comercial do sistema **Gestão Alerta**.

> **Revisão (05/10/2026):** a aba **Concorrência** e o controle de **vendedores** (campo, filtro, avatar e ranking) foram removidos. O filtro de origem saiu do Funil; a origem segue como campo do lead. **Outros** foi adicionado em origens, segmentos e serviços. Seções abaixo que citam esses itens ficam como histórico.

---

## 1. Visão Geral & Propósito

O módulo **Comercial** centraliza a prospecção, o funil de vendas, a carteira de contratos recorrentes e a inteligência de concorrência da Alerta (limpa fossa, caixa de gordura, desentupimento, hidrojateamento, transporte de efluentes para as ETEs da CAGECE e coleta de óleo lubrificante usado).

Substitui dois controles manuais:

1. **Planilha de prospecções** — contatos de entrada, visitas, propostas e fechamentos.
2. **Planilha de contratos/clientes concorrentes** — contratos recorrentes próprios e contas atendidas por concorrentes.

- **Público-alvo & Permissão:** Diretoria e vendedores (1 ou 2 pessoas) — `badge: Diretoria e comercial` (fundo `--lime-100`, texto `--teal-800`, ícone de cadeado), mesmo padrão do badge do Financeiro.
- **Equipe de exemplo:** Paulo Roberto (diretoria, `PR`) e Juliana Castro (vendedora, `JC`).
- **Padrão Visual:** Design System Alerta (Verde Abeto `--teal-700`, Verde Claro `--lime-500`, Laranja Dourada `--amber-500`, Carmim `--danger`, tipografia Outfit). Somente tokens do DS — sem hex soltos.
- **Interface Base:** tela única com navegação em abas (estado `comTab`, que guarda o rótulo da aba, como `FIN_TABS`):
  1. **Visão geral** (KPIs, funil, origem, segmentos, perdas, vendedores, follow-ups)
  2. **Funil** (kanban arrastável)
  3. **Contratos** (carteira recorrente e renovações)
  4. **Concorrência** (concorrentes e clientes deles)

### 1.1 Metas

Sem metas nesta versão. O desempenho é acompanhado por valor fechado no mês e pelo ranking de vendedores.

### 1.2 Estados de Interface

- **Vazio:** coluna do funil sem cards mostra texto curto ("Nenhum lead nesta etapa"). Filtros sem resultado mostram "Nada encontrado" + botão `Limpar filtros`. Sem leads no sistema: chamada para `+ Novo lead`.
- **Carregando:** não se aplica (dados locais em memória).
- **Validação:** erro inline em `--danger` abaixo do campo; foco vai para o primeiro campo inválido.

### 1.3 Acessibilidade

- Todo arraste tem alternativa: menu **Mover para…** no card (clique, toque ou teclado com Enter/Espaço).
- Foco visível (`--border-focus`) em cards, colunas e botões.
- Região `aria-live="polite"` anuncia: *"Card de [Cliente] movido para [Etapa]"*.

---

## 2. Estrutura de Telas & Abas

Seletor de mês (Agosto, Setembro, Outubro de 2026) nas abas Visão geral e Funil. Data de referência: **05/10/2026**.

### 2.1 Aba 1: Visão Geral

1. **Cartões de Indicadores Chave (KPIs):**
   - **Leads no mês:** novos leads do mês, com variação frente ao mês anterior.
   - **Taxa de conversão:** `Fechados / (Fechados + Perdidos)` no mês.
   - **Propostas em aberto:** soma dos valores em *Proposta enviada* + *Negociação*.
   - **Receita recorrente (MRR):** soma do valor mensal dos contratos ativos.
   - **A renovar em 30 dias:** card clicável em `--amber-100`; navega para a aba Contratos filtrada em *A renovar*.

2. **Funil por etapa:** barras horizontais com quantidade e valor por etapa — mostra o gargalo entre proposta e fechamento.

3. **Conversão por origem:** Site × Instagram — leads, fechados, taxa e ticket médio.

4. **Leads por segmento:** Residencial, Condomínio, Comércio/Restaurante, Indústria, Órgão público, Educação/Saúde.

5. **Motivos de perda:** barras com Preço, Prazo, Fechou com concorrente, Sem retorno, Fora da área, Outro.

6. **Ranking de vendedores:** leads atendidos, fechamentos e valor fechado no mês.

7. **Follow-ups de hoje e atrasados:** cliente, próxima ação, canal, vendedor e dias de atraso (em âmbar). Ações: `Registrar interação` e `WhatsApp`.

---

### 2.2 Aba 2: Funil (Kanban)

#### Barra de filtros

- Busca por cliente, bairro ou serviço.
- Filtros: Vendedor, Origem (Site, Instagram, Concorrência), Segmento, Serviço.
- Ações: `+ Novo lead` e `Exportar Excel`.

#### Etapas

| Ordem | Etapa | Critério de entrada | Cor do cabeçalho / badge |
| :---: | :--- | :--- | :--- |
| 1 | **Lead** | Chegou pelo Site/Instagram ou veio da Concorrência; aguarda 1º contato | `--gray-100` / `--gray-700` |
| 2 | **Contato** | Primeiro contato feito; necessidade levantada | `--lime-100` / `--teal-800` |
| 3 | **Visita técnica** | Visita agendada ou feita (medição de fossa, caixa, rede) | `--amber-100` / `--amber-800` |
| 4 | **Proposta enviada** | Valor calculado na Calculadora e enviado ao cliente | `--teal-500` / `--white` |
| 5 | **Negociação** | Ajuste de preço, prazo e pagamento | `--teal-700` / `--white` |
| 6 | **Fechado** | Cliente aprovou — abre modal de fechamento | `--lime-500` / `--forest-900` |
| 7 | **Perdido** | Encerrado sem venda — motivo obrigatório | `--danger` / `--white` |

**Cabeçalho da coluna:** nome da etapa, contagem de cards e soma dos valores.

#### Arrastar e soltar

- **Mouse (desktop):** Pointer Events. Ao pegar o card, ele vira "fantasma" (opacidade 0,4) e uma cópia segue o cursor; a coluna sob o cursor ganha borda tracejada `--teal-700` e fundo `--lime-100`. Soltar fora de coluna cancela.
- **Toque (celular):** mesmo mecanismo com pressão longa (~300 ms) para não conflitar com a rolagem. Colunas em scroll horizontal com `scroll-snap-type: x mandatory`.
- **Soltar em *Fechado*:** abre `comModal: 'fechar'`. Se cancelar, o card volta à etapa anterior.
- **Soltar em *Perdido*:** abre `comModal: 'perda'`. Se cancelar, o card volta.
- **Alternativa:** menu `⋯ → Mover para…` em cada card.
- Mudar de etapa zera o contador de "dias parado" e grava o evento no histórico do lead.

#### Card do lead

1. Cliente (negrito) + badge do segmento.
2. Serviço (ex.: "Caixa de gordura").
3. Valor estimado (`R$ 0.000,00`) — vazio mostra "Sem valor".
4. Badge da origem: `Site`, `Instagram` ou `Concorrência`.
5. Avatar com iniciais do vendedor.
6. Dias parado na etapa — acima de 7 dias fica em `--amber-500` com ícone de alerta.
7. Próxima ação + data do follow-up (atrasado em âmbar).
8. Ações rápidas: `Gerar proposta` (Calculadora) e `⋯` (detalhe, mover, WhatsApp, perder).

---

### 2.3 Aba 3: Contratos

Carteira de contratos recorrentes (ex.: limpeza mensal de caixa de gordura em shoppings, condomínios e supermercados).

1. **KPIs:** MRR ativo, Contratos ativos, A renovar (≤ 30 dias), Vencidos.

2. **Tabela de contratos** (cards no mobile):

| Coluna | Conteúdo |
| :--- | :--- |
| Cliente & segmento | Nome + badge do segmento |
| Serviço | Serviço contratado |
| Valor mensal | `R$ 0.000,00` |
| Periodicidade | Semanal, Quinzenal, Mensal, Bimestral ou Trimestral |
| Vigência | Início → vencimento (`DD/MM/AAAA`) |
| Próxima execução | Data da próxima visita da equipe |
| Caminhão preferencial | Placa da frota (ex.: `PNB-4310`) |
| Status | Badge conforme regra abaixo |
| Ações | `Renovar`, `Gerar OS`, `Editar` |

3. **Status do contrato:**

| Status | Condição | Badge |
| :--- | :--- | :--- |
| **Ativo** | Vencimento > Hoje + 30 dias | `--lime-500` |
| **A renovar** | Hoje ≤ Vencimento ≤ Hoje + 30 dias | `--amber-500` |
| **Vencido** | Vencimento < Hoje e não renovado | `--danger` |
| **Cancelado** | Marcado como cancelado | `--gray-300` / borda neutra |

4. **Alertas de renovação:** 30, 15 e 7 dias antes do vencimento. Contratos com 7 dias ou menos sobem para o topo da lista com destaque âmbar forte.

5. **Filtro de status** compacto com contadores (Todos, Ativo, A renovar, Vencido, Cancelado), no mesmo padrão do Financeiro.

---

### 2.4 Aba 4: Concorrência

1. **Concorrentes:** começa vazio (sem concorrentes pré-cadastrados). Cadastro: nome, pontos fortes, pontos fracos, faixa de preço (Abaixo da média, Média, Acima da média). Ação `Editar`.

2. **Clientes atendidos por concorrente:**
   - Cliente, segmento, concorrente atual (escolhe da lista ou "Não informado"), serviço, preço que paga (estimado), vencimento do contrato deles, observações.
   - Contrato do concorrente vencendo em **até 60 dias** recebe o badge `Oportunidade` em `--amber-500`.
   - Ação **Criar oportunidade no funil:** gera um lead na etapa *Lead* com origem `Concorrência` (exceção documentada às origens Site/Instagram). A linha passa a mostrar "No funil" e o botão é desativado, para evitar duplicidade.

---

## 3. Catálogo de Ações & Modais

1. **Novo lead (`comModal: 'lead'`):**
   - Campos: cliente*, telefone/WhatsApp*, segmento*, origem* (Site, Instagram), serviço*, valor estimado, endereço/bairro, vendedor*, próxima ação + data.
   - Cria o card na etapa *Lead*.

2. **Editar lead (`comModal: 'lead'` com `comItem`):** mesmos campos, preenchidos.

3. **Detalhe do lead (`comModal: 'detalhe'`):** painel lateral (tela cheia no mobile) com resumo, etapa atual, dias parado, histórico/timeline de interações e mudanças de etapa, e ações: `Registrar interação`, `Gerar proposta`, `Enviar proposta`, `Mover para…`, `Marcar perdido`, `Editar`.

4. **Registrar interação (`comModal: 'interacao'`):**
   - Tipo* (Ligação, WhatsApp, Visita, E-mail), data, resumo*, próxima ação e data do próximo follow-up.
   - Grava na timeline e atualiza a próxima ação do card.

5. **Gerar proposta (Calculadora):** abre a Calculadora de Preço existente com o serviço do lead pré-selecionado. Ver §4.1.

6. **Enviar proposta por WhatsApp (`comModal: 'proposta'`):**
   - Texto gerado com cliente, serviço, valor, validade da proposta (7 dias) e assinatura do vendedor.
   - Ações: `Abrir WhatsApp` (`https://wa.me/55...?text=...`) e `Copiar texto`. Mesma mecânica da cobrança do Financeiro.

7. **Marcar perdido (`comModal: 'perda'`):** motivo* (Preço, Prazo, Fechou com concorrente, Sem retorno, Fora da área, Outro) + observação (obrigatória em *Outro*; em *Fechou com concorrente* pede qual concorrente). Move para *Perdido*.

8. **Fechar negócio (`comModal: 'fechar'`):** escolha do tipo:
   - **Serviço avulso:** confirma data prevista e endereço → gera OS na fila de pendentes da Logística.
   - **Contrato recorrente:** periodicidade, início, vigência (padrão 12 meses), valor mensal, caminhão preferencial → cria contrato na aba Contratos e título a receber no Financeiro.
   - Ver §4.2 e §4.3.

9. **Novo/editar contrato (`comModal: 'contrato'`):** cliente*, segmento, serviço*, valor mensal*, periodicidade*, início*, vencimento*, próxima execução, caminhão preferencial, observações.

10. **Renovar contrato (`comModal: 'renovar'`):** nova vigência (+6, +12 ou +24 meses) e reajuste (% ou novo valor, com preview). Status volta para *Ativo*.

11. **Gerar OS da próxima execução:** cria OS pendente na Logística com os dados do contrato e avança a *próxima execução* conforme a periodicidade.

12. **Novo/editar concorrente (`comModal: 'concorrente'`).**

13. **Novo/editar cliente de concorrente (`comModal: 'cliConc'`).**

14. **Criar oportunidade a partir da concorrência:** ver §2.4.

15. **Exportar Excel/CSV:** `.csv` UTF-8 com BOM, separador `;`, valores em formato brasileiro, respeitando a aba e os filtros ativos (Funil, Contratos ou Concorrência).

---

## 4. Integrações

### 4.1 Funil → Calculadora de Preço

1. `Gerar proposta` abre a Calculadora existente (`calcOpen`) com o serviço do lead marcado e guarda o vínculo (`calcLead: <id do lead>`).
2. A Calculadora usa as regras atuais: preço fixo por serviço (tabela editável em *Editar valores*) e transporte de efluentes por viagem de 20 m³, destino em ETE Jangurussu, ETE Fortaleza Leste ou ETE Pecém, mais ajuste/desconto e urgência.
3. Com vínculo ativo, o botão principal vira **"Usar valor na proposta"**: grava valor total e serviços no lead, move o card para *Proposta enviada* e abre o modal de envio por WhatsApp.
4. Sem vínculo, a Calculadora mantém o comportamento atual ("Criar OS com este valor").

### 4.2 Fechado → Logística (serviço avulso)

1. Verifica se o lead já gerou OS (`lead.os`). Se sim, não duplica.
2. Cria item na fila de pendentes da Logística (`pend`) com o próximo número de OS, cliente, endereço, bairro, serviço e valor.
3. Grava `lead.os` e mostra Toast: *"OS #1046 criada para [Cliente]"*.

### 4.3 Fechado → Contratos + Financeiro (contrato recorrente)

1. Verifica se o lead já gerou contrato (`lead.contrato`). Se sim, não duplica.
2. Cria o contrato na aba Contratos (status *Ativo*).
3. Cria o primeiro título **a receber** no Financeiro: origem `Contrato`, forma `Faturado 30 dias`, vencimento em início + 30 dias, valor = mensalidade.
4. Toast: *"Contrato de [Cliente] criado · R$ X/mês lançado no Financeiro"*.

### 4.4 Concorrência → Funil

Ver §2.4. Vínculo gravado nos dois registros (`cliConc.lead` / `lead.cliConc`).

---

## 5. Parâmetros e Custos Globais (Tweaks)

| Parâmetro | Padrão | Uso |
| :--- | :--- | :--- |
| Dias parado (alerta) | 7 dias | Destaque âmbar no card |
| Alertas de renovação | 30 / 15 / 7 dias | Aba Contratos e KPI |
| Janela de oportunidade | 60 dias | Badge na aba Concorrência |
| Validade da proposta | 7 dias | Texto do WhatsApp |

---

## 6. Dados de Exemplo (referência 05/10/2026)

**Contratos próprios** (os mesmos já usados no Financeiro, em `CONTRATOS`):

| Cliente | Segmento | Serviço | Mensal | Caminhão | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Shopping RioMar | Comércio/Restaurante | Caixa de gordura | R$ 18.500 | PNB-4310 | Ativo |
| Shopping Iguatemi Bosque | Comércio/Restaurante | Caixa de gordura | R$ 12.800 | SBD-1187 | A renovar |
| Fábrica M. Dias Branco | Indústria | Transporte de efluentes | R$ 22.400 | ORS-3098 | Ativo |

**Funil** (amostra):

| Cliente | Segmento | Serviço | Valor | Origem | Vendedor | Etapa |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Hospital Geral de Fortaleza | Órgão público | Hidrojateamento | R$ 11.800 | Site | JC | Proposta enviada |
| Restaurante Coco Bambu | Comércio/Restaurante | Caixa de gordura | R$ 2.400 | Instagram | JC | Negociação |
| Cond. AlphaVille Eusébio | Condomínio | Limpa fossa | R$ 5.600 | Instagram | JC | Visita técnica |
| Hotel Gran Marquise | Comércio/Restaurante | Coleta de óleo lubrificante usado | R$ 3.200 | Site | PR | Contato |
| Supermercado Pinheiro | Comércio/Restaurante | Desentupimento | R$ 1.850 | Site | JC | Fechado |
| Colégio Ari de Sá | Educação/Saúde | Hidrojateamento | R$ 3.900 | Instagram | JC | Perdido (Preço) |

**Clientes de concorrentes** (amostra):

| Cliente | Concorrente | Serviço | Preço pago | Vencimento deles |
| :--- | :--- | :--- | :--- | :--- |
| North Shopping Jóquei | Não informado | Caixa de gordura | R$ 14.000/mês | 20/11/2026 (oportunidade) |
| Cond. Parque das Dunas | Não informado | Limpa fossa | R$ 1.900/mês | 15/03/2027 |
