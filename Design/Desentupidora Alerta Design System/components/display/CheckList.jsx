import React from 'react';
export function CheckList({items=[],tone='dark',size=18}){
  const fg=tone==='dark'?'var(--white)':'var(--text-strong)';
  return <ul style={{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column',gap:size*.5}}>{items.map(t=><li key={t} style={{display:'flex',alignItems:'center',gap:size*.55,fontFamily:'var(--font-sans)',fontWeight:500,fontSize:size,color:fg}}>
    <span style={{width:size*1.2,height:size*1.2,borderRadius:size*.25,background:'var(--brand-accent)',color:'var(--forest-900)',display:'inline-flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><span style={{width:size*.32,height:size*.6,border:'solid currentColor',borderWidth:`0 ${size*.14}px ${size*.14}px 0`,transform:'rotate(45deg) translate(-8%,-8%)'}}></span></span>{t}</li>)}</ul>;
}
