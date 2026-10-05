import React from 'react';
import { Logo } from '../brand/Logo.jsx';
export function NavBar({items=['HOME','SOBRE','SERVIÇOS','COMPLIANCE','CONTATO'],active='HOME',onSelect,name='Alerta Gestão de Resíduos',logoBase}){
  return <nav style={{background:'var(--teal-700)',display:'flex',alignItems:'center',gap:16,padding:'0 24px',height:56,fontFamily:'var(--font-sans)'}}>
    <Logo variant="symbol-white" height={40} base={logoBase}/><span style={{color:'var(--white)',fontSize:20,fontWeight:500,letterSpacing:'-.01em',whiteSpace:'nowrap'}}>{name}</span>
    <div style={{flex:1}}></div>
    <div style={{display:'flex',gap:26}}>{items.map(it=><a key={it} href="#" onClick={e=>{e.preventDefault();onSelect&&onSelect(it)}} style={{color:'var(--white)',textDecoration:'none',fontSize:19,fontWeight:it===active?700:400}}>{it}</a>)}</div>
  </nav>;
}
