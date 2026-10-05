import React from 'react';
export function WhatsAppIcon({size=20,color='currentColor'}){
  const u='url(https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/whatsapp.svg)';
  return <span aria-hidden="true" style={{display:'inline-block',width:size,height:size,background:color,WebkitMask:u+' center/contain no-repeat',mask:u+' center/contain no-repeat',flexShrink:0}}></span>;
}
