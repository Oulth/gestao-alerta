import React from 'react';
export function Tabs({items=[],value,onChange,onchange,tone='light'}){
  const handler = onChange || onchange;
  const dark=tone==='dark';
  return <div style={{display:'flex',gap:4,borderBottom:`1px solid ${dark?'rgba(255,255,255,.2)':'var(--border-default)'}`}}>
    {items.map(it=>{const a=it===value;return <button key={it} onClick={()=>handler&&handler(it)} style={{padding:'12px 16px',marginBottom:-1,border:'none',borderBottom:`3px solid ${a?(dark?'var(--lime-500)':'var(--teal-700)'):'transparent'}`,background:'none',fontFamily:'var(--font-sans)',fontWeight:a?700:500,fontSize:16,textTransform:'uppercase',letterSpacing:'.02em',color:dark?(a?'var(--white)':'var(--text-on-dark-muted)'):(a?'var(--teal-700)':'var(--text-muted)'),cursor:'pointer'}}>{it}</button>})}
  </div>;
}
