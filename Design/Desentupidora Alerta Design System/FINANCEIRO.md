# Módulo Financeiro & Fluxo de Caixa — Alerta Gestão de Resíduos

Documento de Especificação de Design e Arquitetura para o módulo Financeiro do sistema **Gestão Alerta**.

---

## 1. Visão Geral & Propósito

O módulo **Financeiro & Fluxo de Caixa** consolida todo o ciclo de faturamento, liquidação de contas a receber (OSs e Contratos), pagamentos operacionais (fornecedores, taxas de descarte CAGECE, diárias e salários) e gestão minuciosa de despesas da frota.

- **Público-alvo & Permissão:** Sócios e equipe financeira (`badge: Sócios e financeiro`).
- **Padrão Visual:** Design System Alerta (Verde Abeto `#08736C`, Verde Claro `#A3CF5B`, Laranja Dourada `#EB9C18`, Carmim `#D93A2B`, tipografia Outfit).
- **Interface Base:** Arquitetura reativa de tela única com navegação em abas:
  1. **Visão geral** (Cockpit executivo, indicadores e fluxo de caixa)
  2. **A receber e a pagar** (Gestão unificada com seletor de tipo [Todos | A receber | A pagar], botão de filtro de status compacto e ações)
  3. **Despesas** (Análise detalhada por centro de custo, vínculo à frota e cadastro de despesas)

---

## 2. Estrutura de Telas & Abas

### 2.1 Aba 1: Visão Geral

Painel executivo com atualização temporal por seletor de mês (Agosto, Setembro, Outubro):

1. **Cartões de Indicadores Chave (KPIs):**
   - **Faturamento do mês vs. Meta:** Valor acumulado, barra de progresso percentual, meta mensal (ex: R$ 450.000) e variação percentual frente ao mês anterior.
   - **Saldo Previsto em 30 dias:** Projeção dinâmica com base no saldo em conta hoje (`Saldo Hoje + A Receber em 30d − A Pagar em 30d`).
   - **A Receber em Aberto:** Total monetário e contagem de títulos ainda não liquidados.
   - **Inadimplência:** Total de títulos vencidos com ação direta de clique para navegar filtrando a lista de vencidos.

2. **Gráfico de Fluxo de Caixa Projetado (30, 60 e 90 dias):**
   - Agrupamento semanal com colunas bidirecionais (entradas para cima em verde abeto `--teal-700`, saídas para baixo em cinza `--gray-300`).
   - Cálculo acumulado de saldo semana a semana com sinalização de cores (verde para superávit, carmim para déficit).

3. **Painéis de Distribuição Analítica:**
   - **Faturamento por Serviço:** Gráfico de barras horizontais com Limpa fossa, Caixa de gordura, Hidrojateamento, Desentupimento e Transporte de efluentes.
   - **Faturamento por Caminhão:** Faturamento distribuído por placa da frota ativa.
   - **Despesas por Categoria:** Distribuição por centro de custo com atalho para detalhamento na aba Despesas.

4. **Margem de Lucro por OS:**
   - Cálculo por Ordem de Serviço concluída:  
     $$\text{Margem} = \text{Receita} - \text{Custo de Combustível} - \text{Custo de Equipe}$$
     - Combustível: $Km \times \text{R\$} 2,80/km$ (base diesel).
     - Equipe de campo: $\text{Horas de viagem} \times \text{R\$} 80,00/h$.
   - Alternador de ordenação: *Melhores margens* / *Menores margens*.
   - Exibição da margem média percentual ponderada.

5. **Top Clientes:**
   - Ranking dos maiores clientes do período em receita gerada e volume de ordens atendidas.

---

### 2.2 Aba 2: A Receber e a Pagar (Gestão Unificada)

Interface de dados com densidade otimizada para desktop e cards adaptativos para visualização mobile. Unifica o controle financeiro em uma única aba limpa, sem poluição visual.

#### Seletor de Tipo & Botão de Filtro de Status
- **Seletor de Tipo (Segmented Control):** Alterna instantaneamente entre `Todos` (557 títulos com identificação por badge `Receber`/`Pagar`), `A receber` (373 títulos) e `A pagar` (184 títulos).
- **Botão de Filtro de Status Compacto:** Substitui múltiplos botões espalhados por um seletor unificado com ícone e contadores em tempo real:
  - `Todos` (373 no a receber / 557 no total)
  - `A vencer` (57 / 119)
  - `Vence hoje` (3 / 6)
  - `Vencido` (17 / 18)
  - `Pago` (284 / 402)
  - `Pago parcial` (12 / 12)
  - `Cancelado` (0 / 0)
- **Ação Limpar Filtro:** Exibe botão contextual rápido `[Nome do Status ✕]` para resetar a seleção para Todos.

#### Origens de Recebimento
- **OS (Ordens de Serviço Concluídas):** Geradas automaticamente ao concluir rota na Logística.
- **Contratos Mensais (Corporativos):** Shoppings, redes e indústrias faturados com vencimento mensal padrão.
- **Lançamentos Manuais:** Inserções avulsas via botão de novo título.

#### Formas de Pagamento Homologadas
- **PIX:** Liquidação imediata ($D+0$).
- **Dinheiro:** Liquidação imediata ($D+0$).
- **Cartão:** Liquidação média em $D+1$.
- **Transferência Bancária:** TED/DOC em $D+3$.
- **Boleto Bancário:** Prazo de $10$ dias padrão.
- **Faturado 30 dias:** Faturamento de contratos recorrentes.

#### Status do Título & Semântica de Cores
| Status | Condição | Badge Semântica | Ação Primária Contextual |
| :--- | :--- | :--- | :--- |
| **A vencer** | $Vencimento > Hoje$ e $Pago = 0$ | `--lime-100` / Neutro suave | Baixar / Cobrar |
| **Vence hoje** | $Vencimento = Hoje$ e $Pago < Valor$ | `--amber-100` / Laranja | Cobrar / Baixar |
| **Vencido** | $Vencimento < Hoje$ e $Pago < Valor$ | `--amber-500` / Alerta | Cobrar WhatsApp |
| **Pago parcial** | $Pago > 0$ e $Pago < Valor$ | `--lime-100` / Verde suave | Baixar saldo restante |
| **Pago** | $Pago \ge Valor$ | `--lime-500` / Verde Alerta | Gerar Recibo |
| **Cancelado** | Sinalizado como cancelado | `--white` / Muted border | Reativar / Detalhes |

---

### 2.3 Aba 4: Despesas

Foco em gestão de centros de custo e auditoria de gastos:
- **KPIs Resumo:** Total do mês, Despesas com frota (combustível + oficina), Despesas fixas (salários + aluguel) e Custo operacional de descarte (CAGECE).
- **Categorias Oficiais:**
  1. Combustível
  2. Manutenção de frota
  3. Salários/diárias
  4. Taxa CAGECE/descarte
  5. Impostos (Simples Nacional / DAS)
  6. Aluguel/escritório
  7. Peças/almoxarifado
  8. Seguro/licenciamento
- **Vínculo Opcional à Frota:** Despesas de manutenção, diesel ou licenciamento são associadas à placa do caminhão para rastreamento de custo unitário.

---

## 3. Catálogo de Ações & Modais

1. **Novo Lançamento (`finModal: 'novo'`):**
   - Alternância rápida entre *A receber*, *A pagar* e *Despesa*.
   - Formulário com validação: Nome do cliente/favorecido, descrição, serviço/categoria, placa (opcional), valor monetário, data de vencimento e forma de pagamento.

2. **Dar Baixa (`finModal: 'baixa'`):**
   - Exibe valor original, total já pago e saldo restante.
   - Permite liquidação total ou parcial, data da operação e forma de quitação.

3. **Cobrar via WhatsApp (`finModal: 'cobrar'`):**
   - Gera mensagem personalizada com nome do cliente, serviço prestado, valor, data de vencimento e chave PIX institucional.
   - Disparo direto via link `https://wa.me/` com registro de data de cobrança no título.

4. **Gerar Recibo (`finModal: 'recibo'`):**
   - Recibo comercial numerado com logotipo da Alerta, endereço institucional de Fortaleza/CE, dados completos do pagador e botão de impressão rápida.

5. **Parcelamento de Título (`finModal: 'parcelar'`):**
   - Simulação e divisão do saldo do título em $N$ parcelas (2x a 12x) com intervalo configurável de dias (ex: 30 dias), gerando preview em tempo real.

6. **Emissão de NFS-e Simulada (`finModal: 'nf'`):**
   - Painel fiscal com discriminação de tomador, código do serviço municipal, cálculo de alíquota de ISS de Fortaleza (3%) e chave de conferência simulada.

7. **Anexo de Comprovante/NF:**
   - Input de arquivo integrado para upload de comprovantes bancários ou notas fiscais em formato PDF ou imagem.

8. **Exportação para Excel/CSV:**
   - Botão de download direto em formato `.csv` compatível com Excel e Google Sheets, respeitando todos os filtros ativos na tela.

---

## 4. Integração Logística $\rightarrow$ Financeiro

Ao concluir uma Ordem de Serviço no módulo de Logística (seja via fechamento de viagem com registro de Km e horário de retorno, seja via avanço para o status *Concluído*):
1. O sistema verifica se já existe uma conta a receber registrada para aquele número de OS.
2. Se não existir, gera instantaneamente um título a receber com o valor pactuado, serviço realizado, placa do caminhão escalado e vencimento projetado.
3. Notifica o gestor com Toast de confirmação.

---

## 5. Parâmetros e Custos Globais (Tweaks)

- **Meta Mensal:** R$ 450.000,00
- **Custo Médio Diesel Frota:** R$ 2,80 por Km rodado
- **Custo Médio Equipe de Campo:** R$ 80,00 por hora trabalhada
- **Horário Padrão de Fechamento Fiscal:** Fim de mês civil
