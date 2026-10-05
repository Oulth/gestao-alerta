import React from 'react';
export function Input({label,hint,error,icon,value,onChange,placeholder,type='text'}){
  const [f,setF]=React.useState(false);
  return <label style={{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-sans)'}}>
    {label&&<span style={{fontSize:14,fontWeight:600,color:'var(--text-strong)'}}>{label}</span>}
    <span style={{display:'flex',alignItems:'center',gap:8,height:48,padding:'0 16px',background:'var(--white)',borderRadius:'var(--radius-sm)',border:`1.5px solid ${error?'var(--danger)':f?'var(--teal-700)':'var(--border-default)'}`,boxShadow:f?'var(--focus-ring)':'none',color:'var(--text-muted)'}}>
      {icon}<input type={type} value={value} onChange={onChange} placeholder={placeholder} onFocus={()=>setF(true)} onBlur={()=>setF(false)} style={{flex:1,border:'none',outline:'none',fontFamily:'inherit',fontSize:16,color:'var(--text-strong)',background:'transparent',minWidth:0}}/></span>
    {(error||hint)&&<span style={{fontSize:13,color:error?'var(--danger)':'var(--text-muted)'}}>{error||hint}</span>}
  </label>;
}
