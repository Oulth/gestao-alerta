# Módulo Ordens de Serviço — Alerta Gestão de Resíduos

Documento de Especificação de Design e Arquitetura para o módulo Ordens de Serviço do sistema **Gestão Alerta**.

---

## 1. Visão Geral & Propósito

Lista central de **todas** as ordens de serviço (limpa fossa, caixa de gordura, desentupimento, hidrojateamento, transporte de efluentes para as ETEs da CAGECE e coleta de óleo lubrificante usado), venham de onde vierem.

- **Público-alvo:** diretoria, escritório e logística.
- **Posição no menu:** logo abaixo de **Dashboard Geral**.
- **Padrão Visual:** Design System Alerta, somente tokens (`--teal-700`, `--lime-500`, `--amber-500`, `--danger` e afins). Sem hex soltos.
- **Interface Base:** tela única com tabela e filtros no desktop; cards no celular. Sem kanban.

---

## 2. Estrutura da Tela

### 2.1 Indicadores (topo)

1. **Pendentes sem caminhão** — OS com status *Pendente*.
2. **Em campo agora** — *Em rota* + *Em serviço* + *Descarregando*.
3. **Concluídas hoje** — concluídas na data corrente.
4. **Valor do dia** — soma das OS agendadas para hoje (exceto canceladas).

**Faixa de pendentes:** logo abaixo dos indicadores, lista das OS pendentes em `--amber-100`, ordenadas pelo horário agendado, cada uma com botão **Alocar**. OS a menos de 2 h do horário sem caminhão ganha destaque âmbar forte.

### 2.2 Filtros

- Busca por cliente, nº da OS ou endereço.
- Status, Origem, Serviço, Caminhão.
- Período: **Hoje**, **7 dias** (padrão: hoje + próximos 7), **30 dias**, **Personalizado** (de/até) e alternador **Incluir passadas**.
- Ações: **+ Nova OS** e **Exportar Excel** (`.csv`, `;`, UTF-8 com BOM, respeita os filtros).
- Sem resultado: "Nenhuma OS neste filtro" + **Limpar filtros**.

### 2.3 Tabela

| Coluna | Conteúdo |
| :--- | :--- |
| Nº | `#1046` |
| Agendada | Data e hora |
| Cliente | Nome + telefone |
| Local | Endereço · bairro |
| Serviço | Serviço(s) + volume m³ |
| Equipe | Caminhão · motorista · ajudante |
| Destino | ETE Jangurussu, ETE Fortaleza Leste, ETE Pecém ou — |
| Valor | `R$ 0.000,00` + forma de pagamento |
| Origem | Avulsa, Comercial, Contrato ou Calculadora — com link para o lead/contrato |
| Status | Badge (abaixo) |
| Ações | Menu `⋯` |

Cabeçalhos `<th scope="col">`, linhas focáveis, Enter abre o detalhe.

### 2.4 Status

Mesmas cores da Logística (`ST_BG`/`ST_FG`), mais dois status novos.

| Status | Condição | Badge (fundo / texto) |
| :--- | :--- | :--- |
| **Pendente** | Sem caminhão alocado | `--amber-100` / `--amber-800` |
| **Programado** | Caminhão e equipe alocados | `--lime-100` / `--teal-800` |
| **Em rota** | Saiu para o cliente | `--teal-700` / `--white` |
| **Em serviço** | Executando no local | `--teal-500` / `--white` |
| **Descarregando** | Na ETE | `--amber-100` / `--amber-800` (com ícone de caminhão) |
| **Concluído** | Finalizado | `--lime-500` / `--forest-900` |
| **Cancelada** | Cancelada com motivo | `--gray-100` / `--text-muted` (texto riscado) |

---

## 3. Catálogo de Ações & Modais

1. **Nova OS:** reaproveita o modal **Nova OS** existente.
2. **Detalhe (`osModal: 'detalhe'`):** painel lateral (tela cheia no celular) com todos os campos, fotos, assinatura, MTR e **histórico** (criação, alocação, cada mudança de status, cancelamento).
3. **Editar (`osModal: 'editar'`):** cliente, telefone, **contato no local**, endereço, serviço(s), volume, data/hora, destino, valor, forma de pagamento, observações. Bloqueado após *Concluído*.
4. **Alocar / agendar (`osModal: 'alocar'`):** caminhão (só ativos), motorista, ajudante, data e hora. Passa a OS para *Programado* e a coloca na escala da Logística.
5. **Mudar status (`osModal: 'status'`):** avança/retrocede no ciclo; cada mudança grava data/hora no histórico.
6. **Concluir:** exige **MTR** quando o serviço é transporte de efluentes (parâmetro). Gera o título a receber (§4).
7. **Cancelar (`osModal: 'cancelar'`):** motivo obrigatório (erro inline em `--danger`). Libera o caminhão na escala.
8. **Duplicar:** copia cliente, local e serviços para uma nova OS *Pendente* com novo número.
9. **Registrar MTR (`osModal: 'mtr'`):** nº do manifesto + anexo (PDF/imagem).
10. **Fotos (`osModal: 'fotos'`):** upload de fotos **antes** e **depois**, com miniaturas.
11. **Assinatura (`osModal: 'assinatura'`):** desenho na tela (mouse/toque) ou, como alternativa acessível, digitar nome e documento.
12. **Imprimir:** ficha da OS com logo, dados, equipe, MTR, fotos e assinatura.
13. **WhatsApp:** link `https://wa.me/55...` com resumo (nº, data/hora, serviço, endereço, valor).

---

## 4. Integrações

- **Logística:** alocar na OS preenche a escala; mudar status na Logística atualiza a OS, e vice-versa. A fila `pend` da Logística passa a ser a lista de OS *Pendentes* desta página.
- **Financeiro:** ao concluir, reaproveita `sincronizarOSFinanceiro`, que já verifica o nº da OS para **não duplicar** o título a receber.
- **Comercial:** OS gerada no fechamento avulso guarda `leadId`; a coluna Origem linka para o lead.
- **Contratos:** OS gerada pelo contrato guarda `contratoId` e já avança a próxima execução (comportamento atual).
- **Calculadora:** "Criar OS com este valor" preenche serviços, volume, destino e valor (comportamento atual) e marca origem *Calculadora*.

---

## 5. Parâmetros

| Parâmetro | Padrão | Uso |
| :--- | :--- | :--- |
| Período padrão | Hoje + 7 dias | Filtro inicial da lista |
| MTR obrigatório no transporte | Sim | Bloqueia *Concluir* sem MTR |
| Alerta de pendente sem caminhão | 2 h antes do agendamento | Destaque na faixa de pendentes |
