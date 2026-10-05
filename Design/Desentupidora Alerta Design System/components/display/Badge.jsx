import React from 'react';
const T={lime:['var(--brand-accent)','var(--forest-900)','transparent'],teal:['var(--brand-primary)','var(--white)','transparent'],deep:['var(--brand-deep)','var(--white)','transparent'],light:['var(--lime-100)','var(--teal-800)','transparent'],white:['var(--white)','var(--teal-700)','transparent'],'outline-inverse':['transparent','var(--white)','var(--white)'],success:['var(--success)','var(--forest-900)','transparent'],warning:['var(--warning)','var(--ink-900)','transparent'],'success-soft':['var(--success-soft)','var(--success-ink)','transparent'],'warning-soft':['var(--warning-soft)','var(--warning-ink)','transparent']};
export function Badge({tone='lime',children,icon}){
  const [bg,fg,bd]=T[tone]||T.lime;
  return <span style={{display:'inline-flex',alignItems:'center',gap:6,height:28,padding:'0 12px',background:bg,color:fg,border:`1.5px solid ${bd}`,borderRadius:'var(--radius-pill)',fontFamily:'var(--font-sans)',fontWeight:600,fontSize:14,lineHeight:1,whiteSpace:'nowrap'}}>{icon}{children}</span>;
}
