const {Logo,WhatsAppContact}=window.DesentupidoraAlertaDesignSystem_e6b749;
function SiteFooter(){return <footer style={{background:'var(--teal-700)',color:'#fff'}}><div style={{maxWidth:1200,margin:'0 auto',padding:'48px 24px',display:'flex',gap:40,flexWrap:'wrap',justifyContent:'space-between',alignItems:'center'}}>
<Logo variant="white" height={48}/>
<div style={{display:'flex',flexDirection:'column',gap:8,fontSize:15}}><span style={{display:'flex',gap:8,alignItems:'center'}}><Ic n="map-pin" s={16} c="var(--lime-500)"/>Rua Doutor Humberto Rodrigues, 200 — Mondubim, Fortaleza/CE</span><span style={{display:'flex',gap:8,alignItems:'center'}}><Ic n="globe" s={16} c="var(--lime-500)"/>www.alertadesentupidora.com.br</span><span style={{display:'flex',gap:8,alignItems:'center'}}><Ic n="instagram" s={16} c="var(--lime-500)"/>@desentupidoraalerta</span></div>
<div style={{'--label-bg':'var(--teal-700)'}}><WhatsAppContact/></div></div></footer>}
window.SiteFooter=SiteFooter;