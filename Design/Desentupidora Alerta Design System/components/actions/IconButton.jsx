import React from 'react';
const M={primary:['var(--brand-primary)','var(--white)','var(--brand-primary-hover)'],whatsapp:['var(--cta-whatsapp)','var(--white)','var(--cta-whatsapp-hover)'],lime:['var(--brand-accent)','var(--forest-900)','var(--brand-accent-hover)'],deep:['var(--brand-deep)','var(--white)','var(--forest-900)'],ghost:['transparent','var(--brand-primary)','var(--gray-100)']};
export function IconButton({icon,label,variant='primary',size=44,onClick,disabled}){
  const [h,setH]=React.useState(false);const [bg,fg,hb]=M[variant]||M.primary;
  return <button aria-label={label} title={label} disabled={disabled} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{width:size,height:size,display:'inline-flex',alignItems:'center',justifyContent:'center',background:h&&!disabled?hb:bg,color:fg,border:'none',borderRadius:'50%',cursor:'pointer',opacity:disabled?.45:1,transition:'background var(--dur-fast)'}}>{icon}</button>;
}
