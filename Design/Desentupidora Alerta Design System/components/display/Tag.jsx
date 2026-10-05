import React from 'react';
export function Tag({children,selected,onClick}){
  return <button onClick={onClick} style={{display:'inline-flex',alignItems:'center',height:34,padding:'0 16px',borderRadius:'var(--radius-pill)',border:`1.5px solid ${selected?'var(--teal-700)':'var(--border-default)'}`,background:selected?'var(--teal-700)':'var(--white)',color:selected?'var(--white)':'var(--text-body)',fontFamily:'var(--font-sans)',fontWeight:500,fontSize:14,cursor:onClick?'pointer':'default'}}>{children}</button>;
}
