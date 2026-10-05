import React from 'react';
export function TopBar({message='ATENDIMENTO EM TODO O CEARÁ',action='FALAR COM ESPECIALISTA',onAction}){
  return <div style={{background:'var(--lime-100)',display:'flex',justifyContent:'center',alignItems:'center',gap:24,padding:'6px 16px',flexWrap:'wrap',fontFamily:'var(--font-sans)'}}>
    <span style={{fontSize:16,fontWeight:400,color:'var(--ink-900)'}}>{message}</span>
    <button onClick={onAction} style={{height:36,padding:'0 22px',border:'1.5px solid var(--ink-900)',borderRadius:'var(--radius-xs)',background:'transparent',fontFamily:'inherit',fontSize:16,color:'var(--ink-900)',cursor:'pointer'}}>{action}</button>
  </div>;
}
