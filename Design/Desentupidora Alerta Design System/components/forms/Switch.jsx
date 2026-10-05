import React from 'react';
export function Switch({checked,onChange,label}){
  return <label onClick={()=>onChange&&onChange(!checked)} style={{display:'inline-flex',alignItems:'center',gap:10,cursor:'pointer',fontFamily:'var(--font-sans)',fontSize:15,color:'var(--text-body)'}}>
    <span style={{width:46,height:26,borderRadius:999,background:checked?'var(--teal-700)':'var(--gray-200)',position:'relative',transition:'background var(--dur-base)'}}>
      <span style={{position:'absolute',top:3,left:checked?23:3,width:20,height:20,borderRadius:'50%',background:checked?'var(--lime-500)':'var(--white)',boxShadow:'var(--shadow-sm)',transition:'left var(--dur-base) var(--ease-out)'}}></span></span>{label}</label>;
}
