import React from 'react';
export function Card({title,eyebrow,icon,children,tone='light',footer,style}){
  const dark=tone==='dark',teal=tone==='teal';const inv=dark||teal;
  return <div style={{background:dark?'var(--surface-inverse)':teal?'var(--surface-teal)':'var(--surface-card)',color:inv?'var(--white)':'var(--text-body)',border:inv?'none':'1px solid var(--border-default)',borderRadius:'var(--radius-lg)',padding:28,display:'flex',flexDirection:'column',gap:12,boxShadow:inv?'none':'var(--shadow-sm)',...style}}>
    {icon&&<div style={{width:52,height:52,borderRadius:'50%',background:inv?'var(--brand-accent)':'var(--lime-100)',color:inv?'var(--forest-900)':'var(--teal-700)',display:'flex',alignItems:'center',justifyContent:'center'}}>{icon}</div>}
    {eyebrow&&<div style={{fontFamily:'var(--font-sans)',fontWeight:600,fontSize:13,letterSpacing:'var(--ls-wide)',textTransform:'uppercase',color:inv?'var(--lime-500)':'var(--teal-600)'}}>{eyebrow}</div>}
    {title&&<div style={{fontFamily:'var(--font-sans)',fontWeight:700,fontSize:24,lineHeight:1.1,letterSpacing:'-.01em',color:inv?'var(--white)':'var(--teal-700)'}}>{title}</div>}
    {children&&<div style={{fontFamily:'var(--font-sans)',fontSize:16,lineHeight:1.45,color:inv?'var(--text-on-dark-muted)':'var(--text-muted)'}}>{children}</div>}
    {footer}
  </div>;
}
