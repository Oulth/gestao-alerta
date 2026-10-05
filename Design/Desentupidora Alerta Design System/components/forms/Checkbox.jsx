import React from 'react';
export function Checkbox({label,checked,onChange,radio}){
  return <label onClick={()=>onChange&&onChange(!checked)} style={{display:'inline-flex',alignItems:'center',gap:10,cursor:'pointer',fontFamily:'var(--font-sans)',fontSize:15,color:'var(--text-body)'}}>
    <span style={{width:22,height:22,borderRadius:radio?'50%':6,border:`1.5px solid ${checked?'var(--teal-700)':'var(--gray-300)'}`,background:checked&&!radio?'var(--teal-700)':'var(--white)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
      {checked&&(radio?<span style={{width:10,height:10,borderRadius:'50%',background:'var(--teal-700)'}}></span>:<span style={{width:6,height:11,border:'solid var(--lime-500)',borderWidth:'0 2.5px 2.5px 0',transform:'rotate(45deg) translate(-1px,-1px)'}}></span>)}
    </span>{label}</label>;
}
