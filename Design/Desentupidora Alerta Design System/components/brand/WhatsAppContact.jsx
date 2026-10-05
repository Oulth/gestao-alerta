import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon.jsx';
export function WhatsAppContact({number='98905.1654',ddd='85',label='whatsapp:',tone='dark',scale=1}){
  const dark=tone==='dark',fg=dark?'var(--white)':'var(--forest-900)';
  return <div style={{position:'relative',display:'inline-flex',alignItems:'center',gap:10*scale,padding:`${12*scale}px ${18*scale}px ${10*scale}px`,border:`${2*scale}px solid ${fg}`,borderRadius:12*scale,color:fg,fontFamily:'var(--font-sans)'}}>
    <span style={{position:'absolute',top:-11*scale,left:'50%',transform:'translateX(-50%)',padding:`0 ${8*scale}px`,background:dark?'var(--label-bg,var(--forest-800))':'var(--label-bg,var(--white))',fontSize:15*scale,fontWeight:500,lineHeight:1.2,whiteSpace:'nowrap'}}>{label}</span>
    <WhatsAppIcon size={30*scale}/>
    <span style={{display:'inline-flex',alignItems:'flex-start',fontWeight:700,lineHeight:1}}><sup style={{fontSize:13*scale,marginTop:2*scale,marginRight:3*scale}}>{ddd}</sup><span style={{fontSize:28*scale,letterSpacing:'-.01em'}}>{number}</span></span>
  </div>;
}
