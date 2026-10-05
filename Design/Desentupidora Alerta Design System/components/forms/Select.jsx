import React from 'react';
export function Select({label,options=[],value,onChange,placeholder}){
  return <label style={{display:'flex',flexDirection:'column',gap:6,fontFamily:'var(--font-sans)'}}>
    {label&&<span style={{fontSize:14,fontWeight:600,color:'var(--text-strong)'}}>{label}</span>}
    <select value={value} onChange={onChange} style={{height:48,padding:'0 16px',background:'var(--white)',borderRadius:'var(--radius-sm)',border:'1.5px solid var(--border-default)',fontFamily:'inherit',fontSize:16,color:'var(--text-strong)'}}>
      {placeholder&&<option value="">{placeholder}</option>}{options.map(o=><option key={o} value={o}>{o}</option>)}</select>
  </label>;
}
