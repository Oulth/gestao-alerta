import React from 'react';
const FILES={dark:'logo-alerta.png',light:'logo-alerta-on-light.png',white:'logo-alerta-white.png',symbol:'symbol-alerta.png','symbol-white':'symbol-alerta-white.png'};
export function Logo({variant='dark',height=40,base,alt='Alerta Gestão de Resíduos'}){
  const b=base??(typeof window!=='undefined'&&window.ALERTA_ASSET_BASE)??'assets/';
  return <img src={b+FILES[variant]} alt={alt} style={{height,width:'auto',display:'block'}}/>;
}
