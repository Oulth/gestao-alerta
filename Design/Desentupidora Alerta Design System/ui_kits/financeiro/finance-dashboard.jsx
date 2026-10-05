const { Logo, Badge, Card, Button, Tabs, Tag } = window.DesentupidoraAlertaDesignSystem_e6b749 || {};
const brl = v => (Number(v) || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function FinanceDashboard() {
  const [tab, setTab] = React.useState('visao');
  const [search, setSearch] = React.useState('');

  const kpis = [
    { label: 'Faturamento do Mês', val: 'R$ 412.850,00', sub: '91.7% da meta de R$ 450k', tone: 'success' },
    { label: 'Saldo Previsto (30d)', val: 'R$ 138.420,00', sub: 'Receber − Pagar em 30d', tone: 'primary' },
    { label: 'A Receber em Aberto', val: 'R$ 184.200,00', sub: '58 títulos pendentes', tone: 'neutral' },
    { label: 'Inadimplência (Vencido)', val: 'R$ 19.340,00', sub: '7 títulos em atraso', tone: 'danger' }
  ];

  const flow = [
    { sem: 'Sem 1', ent: 112000, sai: 72000, sal: 40000 },
    { sem: 'Sem 2', ent: 98000, sai: 68000, sal: 30000 },
    { sem: 'Sem 3', ent: 124000, sai: 85000, sal: 39000 },
    { sem: 'Sem 4', ent: 105000, sai: 76000, sal: 29000 }
  ];

  const receber = [
    { id: 'REC-1042', cli: 'Shopping Iguatemi Bosque', serv: 'Hidrojateamento + Gordura', val: 12400, venc: '08/10/2026', forma: 'Boleto 30d', status: 'A vencer', badge: 'neutral' },
    { id: 'REC-1043', cli: 'Moinho Dias Branco', serv: 'Transporte de Efluente (OS #2491)', val: 8900, venc: '05/10/2026', forma: 'Faturado 30d', status: 'Vence hoje', badge: 'warning' },
    { id: 'REC-1039', cli: 'Condomínio Reserva Imperial', serv: 'Limpeza de Caixa de Gordura', val: 3200, venc: '01/10/2026', forma: 'Boleto', status: 'Vencido', badge: 'danger' },
    { id: 'REC-1035', cli: 'Restaurante Coco Bambu Meireles', serv: 'Desobstrução Emergencial', val: 1850, venc: '28/09/2026', forma: 'PIX', status: 'Pago', badge: 'success' }
  ];

  const despesas = [
    { id: 'DSP-0811', fav: 'Posto Petrobras Aeroporto', cat: 'Combustível', placa: 'POX-4A12', val: 2450, data: '04/10/2026', forma: 'Cartão Frota' },
    { id: 'DSP-0812', fav: 'CAGECE Estação ETE Jangurussu', cat: 'Taxa CAGECE/descarte', placa: 'NUS-8291', val: 1820, data: '03/10/2026', forma: 'Boleto' },
    { id: 'DSP-0813', fav: 'Oficina Truck Diesel Messejana', cat: 'Manutenção de frota', placa: 'OCR-5920', val: 4300, data: '02/10/2026', forma: 'Transferência' },
    { id: 'DSP-0814', fav: 'Folha Operacional (Diárias Campo)', cat: 'Salários/diárias', placa: '—', val: 8600, data: '01/10/2026', forma: 'PIX' }
  ];

  return (
    <div style={{ maxWidth: 1240, margin: '0 auto', fontFamily: 'var(--font-sans)', color: 'var(--text-body)', padding: '24px 16px' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <h1 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: 'var(--ink-900)', letterSpacing: '-0.02em' }}>
              Financeiro & Fluxo de Caixa
            </h1>
            <span style={{ background: 'var(--lime-100)', color: 'var(--teal-800)', padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>
              Sócios e Financeiro
            </span>
          </div>
          <p style={{ margin: '4px 0 0 0', color: 'var(--text-muted)', fontSize: 14 }}>
            Projeção 30/60/90 dias, faturamento de contratos, OSs em campo e despesas operacionais da frota.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button style={{ background: '#fff', border: '1px solid var(--border-default)', padding: '9px 16px', borderRadius: 'var(--radius-sm)', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>
            Exportar CSV
          </button>
          <button style={{ background: 'var(--teal-700)', color: '#fff', border: 'none', padding: '9px 18px', borderRadius: 'var(--radius-sm)', fontWeight: 700, fontSize: 13, cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}>
            + Novo Lançamento
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '2px solid var(--border-default)', marginBottom: 24, gap: 8 }}>
        {[
          { id: 'visao', label: 'Visão Geral' },
          { id: 'receber', label: 'A Receber (58)' },
          { id: 'pagar', label: 'A Pagar (24)' },
          { id: 'despesas', label: 'Despesas da Frota' }
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              padding: '10px 18px',
              border: 'none',
              background: 'transparent',
              fontWeight: 700,
              fontSize: 14,
              cursor: 'pointer',
              color: tab === t.id ? 'var(--teal-700)' : 'var(--text-muted)',
              borderBottom: tab === t.id ? '3px solid var(--teal-700)' : '3px solid transparent',
              marginBottom: -2
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* View: Visão Geral */}
      {tab === 'visao' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* KPIs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {kpis.map((k, i) => (
              <div key={i} style={{ background: '#fff', padding: 20, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>{k.label}</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: 'var(--ink-900)', marginTop: 8 }}>{k.val}</div>
                <div style={{ fontSize: 12, color: k.tone === 'danger' ? 'var(--red-500)' : 'var(--teal-700)', marginTop: 4, fontWeight: 600 }}>{k.sub}</div>
              </div>
            ))}
          </div>

          {/* Cash Flow Chart & Breakdown */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20 }}>
            {/* Cash flow weekly */}
            <div style={{ background: '#fff', padding: 24, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--ink-900)' }}>Fluxo de Caixa Projetado</h3>
                  <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Projeção semanal (Entradas vs Saídas)</span>
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, background: 'var(--gray-100)', padding: '4px 8px', borderRadius: 4 }}>Outubro / 2026</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, height: 180, alignItems: 'end', borderBottom: '1px solid var(--border-default)', paddingBottom: 16 }}>
                {flow.map((f, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end', gap: 6 }}>
                    <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 120 }}>
                      <div style={{ width: 22, height: `${(f.ent / 140000) * 100}%`, background: 'var(--teal-700)', borderRadius: '4px 4px 0 0' }} title={`Entrada: ${brl(f.ent)}`}></div>
                      <div style={{ width: 22, height: `${(f.sai / 140000) * 100}%`, background: 'var(--gray-300)', borderRadius: '4px 4px 0 0' }} title={`Saída: ${brl(f.sai)}`}></div>
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink-900)' }}>{f.sem}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--teal-700)' }}>+{brl(f.sal)}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 14, fontSize: 12 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 10, height: 10, background: 'var(--teal-700)', borderRadius: 2 }}></span> Entradas previstas
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 10, height: 10, background: 'var(--gray-300)', borderRadius: 2 }}></span> Saídas previstas
                </span>
              </div>
            </div>

            {/* Distribution */}
            <div style={{ background: '#fff', padding: 24, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--ink-900)' }}>Faturamento por Serviço</h3>
              {[
                { n: 'Limpa fossa séptica', p: 42, v: 'R$ 173.400' },
                { n: 'Hidrojateamento alta pressão', p: 26, v: 'R$ 107.300' },
                { n: 'Transporte de efluentes', p: 18, v: 'R$ 74.300' },
                { n: 'Caixa de gordura', p: 14, v: 'R$ 57.850' }
              ].map((s, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>
                    <span>{s.n}</span>
                    <span style={{ color: 'var(--teal-800)', fontWeight: 700 }}>{s.v}</span>
                  </div>
                  <div style={{ height: 6, background: 'var(--gray-100)', borderRadius: 999, overflow: 'hidden' }}>
                    <div style={{ width: `${s.p}%`, height: '100%', background: 'var(--teal-600)' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* View: A Receber */}
      {tab === 'receber' && (
        <div style={{ background: '#fff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border-default)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>Títulos a Receber</h3>
            <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Origem: Contratos recorrentes e Ordens de Serviço concluídas</span>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: 'var(--gray-50)', textAlign: 'left', borderBottom: '1px solid var(--border-default)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>CÓDIGO</th>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>CLIENTE / SERVIÇO</th>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>VALOR</th>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>VENCIMENTO</th>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>FORMA</th>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>STATUS</th>
                <th style={{ padding: '12px 16px', textAlign: 'right', fontWeight: 600 }}>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {receber.map(r => (
                <tr key={r.id} style={{ borderBottom: '1px solid var(--border-default)' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--teal-700)' }}>{r.id}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ fontWeight: 700, color: 'var(--ink-900)' }}>{r.cli}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{r.serv}</div>
                  </td>
                  <td style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--ink-900)' }}>{brl(r.val)}</td>
                  <td style={{ padding: '14px 16px' }}>{r.venc}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{ background: 'var(--gray-100)', padding: '3px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600 }}>{r.forma}</span>
                  </td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{
                      padding: '4px 10px',
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 700,
                      background: r.badge === 'success' ? 'var(--lime-100)' : r.badge === 'warning' ? 'var(--amber-100)' : r.badge === 'danger' ? '#FFE8E8' : 'var(--gray-100)',
                      color: r.badge === 'success' ? 'var(--teal-800)' : r.badge === 'warning' ? 'var(--amber-800)' : r.badge === 'danger' ? 'var(--red-500)' : 'var(--gray-700)'
                    }}>
                      {r.status}
                    </span>
                  </td>
                  <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                    <button style={{ background: 'transparent', border: '1px solid var(--border-default)', padding: '6px 12px', borderRadius: 4, fontSize: 12, fontWeight: 600, cursor: 'pointer', marginRight: 6 }}>
                      Baixa
                    </button>
                    <button style={{ background: 'var(--whatsapp)', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: 4, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
                      Cobrar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* View: Despesas */}
      {tab === 'despesas' && (
        <div style={{ background: '#fff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border-default)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>Despesas Operacionais & Frota</h3>
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Classificação por categoria com vínculo opcional a placas</span>
            </div>
            <button style={{ background: 'var(--teal-700)', color: '#fff', border: 'none', padding: '8px 14px', borderRadius: 4, fontWeight: 700, fontSize: 12, cursor: 'pointer' }}>
              + Nova Despesa
            </button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: 'var(--gray-50)', textAlign: 'left', borderBottom: '1px solid var(--border-default)', color: 'var(--text-muted)' }}>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>CÓDIGO</th>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>FAVORECIDO</th>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>CATEGORIA</th>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>PLACA FROTA</th>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>VALOR</th>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>DATA</th>
                <th style={{ padding: '12px 16px', fontWeight: 600 }}>FORMA</th>
              </tr>
            </thead>
            <tbody>
              {despesas.map(d => (
                <tr key={d.id} style={{ borderBottom: '1px solid var(--border-default)' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--teal-700)' }}>{d.id}</td>
                  <td style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--ink-900)' }}>{d.fav}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{ background: 'var(--cream-50)', color: 'var(--teal-800)', border: '1px solid var(--border-default)', padding: '3px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600 }}>
                      {d.cat}
                    </span>
                  </td>
                  <td style={{ padding: '14px 16px', fontWeight: 600, color: d.placa === '—' ? 'var(--text-muted)' : 'var(--ink-900)' }}>{d.placa}</td>
                  <td style={{ padding: '14px 16px', fontWeight: 700, color: 'var(--red-500)' }}>- {brl(d.val)}</td>
                  <td style={{ padding: '14px 16px' }}>{d.data}</td>
                  <td style={{ padding: '14px 16px' }}>
                    <span style={{ background: 'var(--gray-100)', padding: '3px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600 }}>{d.forma}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

window.FinanceDashboard = FinanceDashboard;
