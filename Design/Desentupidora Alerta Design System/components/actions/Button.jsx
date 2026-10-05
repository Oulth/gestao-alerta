import React from 'react';
const V={primary:['var(--brand-primary)','var(--white)','var(--brand-primary-hover)','transparent','none'],
whatsapp:['var(--cta-whatsapp)','var(--white)','var(--cta-whatsapp-hover)','transparent','var(--shadow-cta)'],
lime:['var(--brand-accent)','var(--forest-900)','var(--brand-accent-hover)','transparent','none'],
deep:['var(--brand-deep)','var(--white)','var(--forest-900)','transparent','none'],
outline:['transparent','var(--ink-900)','rgba(15,31,26,.06)','var(--ink-900)','none'],
'outline-inverse':['transparent','var(--white)','rgba(255,255,255,.1)','var(--border-on-dark)','none'],
ghost:['transparent','var(--brand-primary)','var(--gray-100)','transparent','none']};
const S={sm:[36,16,14],md:[46,24,16],lg:[56,30,19]};
export function Button({variant='primary',size='md',icon,iconRight,fullWidth,disabled,children,onClick,type='button',square,style}){
  const [h,setH]=React.useState(false),[p,setP]=React.useState(false);
  const [bg,fg,hb,bd,sh]=V[variant]||V.primary,[ht,px,fs]=S[size]||S.md;
  const sq=square??variant==='outline';
  return <button type={type} disabled={disabled} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>{setH(false);setP(false)}} onMouseDown={()=>setP(true)} onMouseUp={()=>setP(false)}
    style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,height:ht,padding:`0 ${px}px`,width:fullWidth?'100%':undefined,background:h&&!disabled?hb:bg,color:fg,
    border:`1.5px solid ${bd}`,borderRadius:sq?'var(--radius-xs)':'var(--radius-pill)',boxShadow:sh,fontFamily:'var(--font-sans)',fontWeight:sq?500:700,fontSize:fs,
    textTransform:sq?'uppercase':'none',letterSpacing:sq?'.02em':0,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.45:1,transform:p&&!disabled?'scale(.97)':'none',transition:'background var(--dur-fast),transform var(--dur-fast)',whiteSpace:'nowrap',...style}}>{icon}{children}{iconRight}</button>;
}
