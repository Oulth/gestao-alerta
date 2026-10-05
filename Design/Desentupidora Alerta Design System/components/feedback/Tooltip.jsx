import React from 'react';
export function Tooltip({text,children}){
  const [o,setO]=React.useState(false);
  return <span onMouseEnter={()=>setO(true)} onMouseLeave={()=>setO(false)} style={{position:'relative',display:'inline-flex'}}>{children}
    {o&&<span style={{position:'absolute',bottom:'calc(100% + 8px)',left:'50%',transform:'translateX(-50%)',whiteSpace:'nowrap',padding:'6px 12px',background:'var(--forest-900)',color:'var(--white)',borderRadius:'var(--radius-sm)',fontFamily:'var(--font-sans)',fontSize:13,fontWeight:500,pointerEvents:'none'}}>{text}</span>}</span>;
}
