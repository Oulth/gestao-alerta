import React from 'react';
export function Dialog({open,title,children,onClose,actions}){
  if(!open)return null;
  return <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(14,46,37,.6)',backdropFilter:'blur(4px)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:100,padding:16}}>
    <div onClick={e=>e.stopPropagation()} style={{width:'100%',maxWidth:440,background:'var(--white)',borderRadius:'var(--radius-lg)',padding:28,display:'flex',flexDirection:'column',gap:12,boxShadow:'var(--shadow-lg)'}}>
      <div style={{fontFamily:'var(--font-sans)',fontWeight:700,fontSize:26,lineHeight:1.1,color:'var(--teal-700)'}}>{title}</div>
      <div style={{fontFamily:'var(--font-sans)',fontSize:16,lineHeight:1.45,color:'var(--text-body)'}}>{children}</div>
      {actions&&<div style={{display:'flex',gap:8,justifyContent:'flex-end',marginTop:8}}>{actions}</div>}
    </div></div>;
}
