import React from 'react';
export function Toast({tone='success',children,icon}){
  const c={success:'var(--lime-500)',danger:'var(--danger)',info:'var(--teal-300)',warning:'var(--amber-500)'}[tone];
  return <div style={{display:'inline-flex',alignItems:'center',gap:12,padding:'12px 18px',background:'var(--forest-800)',color:'var(--white)',borderRadius:'var(--radius-pill)',boxShadow:'var(--shadow-md)',fontFamily:'var(--font-sans)',fontSize:15,fontWeight:500}}>
    <span style={{width:10,height:10,borderRadius:'50%',background:c,flexShrink:0}}></span>{icon}{children}</div>;
}
