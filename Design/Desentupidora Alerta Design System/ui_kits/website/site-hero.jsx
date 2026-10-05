const {Logo}=window.DesentupidoraAlertaDesignSystem_e6b749;
const Arc=({style})=><div style={{position:'absolute',width:700,height:700,borderRadius:'50%',border:'1px solid rgba(166,216,90,.35)',...style}}></div>;
function SiteHero(){return <section style={{position:'relative',height:374,background:'var(--grain),var(--grad-forest)',backgroundBlendMode:'overlay,normal',overflow:'hidden',color:'#fff'}}>
<Arc style={{left:-160,top:-160}}/><Arc style={{right:-160,top:-160}}/>
<div style={{position:'relative',maxWidth:1600,margin:'0 auto',height:'100%',display:'grid',gridTemplateColumns:'1fr auto 1fr',alignItems:'center',padding:'0 7%',gap:32}}>
<p style={{margin:0,font:'300 21px/1.52 var(--font-sans)',letterSpacing:'.05em',justifySelf:'end',maxWidth:260,marginTop:-60}}>Duas décadas <b style={{fontWeight:700}}>protegendo o meio ambiente,</b> por meio do nosso trabalho.</p>
<div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:10,marginTop:-50}}><div style={{display:'flex',alignItems:'baseline',color:'var(--lime-500)'}}><span style={{font:'800 128px/1 var(--font-sans)',WebkitTextStroke:'5px var(--lime-500)',color:'transparent',letterSpacing:'-.04em'}}>20</span><span style={{font:'400 96px/1 var(--font-script)',marginLeft:-6}}>anos</span></div><Logo height={56}/></div>
<p style={{margin:0,font:'300 21px/1.52 var(--font-sans)',letterSpacing:'.05em',maxWidth:300,marginTop:-60}}>Gestão de resíduos e transporte de efluentes <b style={{fontWeight:700}}>com responsabilidade e compromisso ambiental.</b></p>
</div></section>}
window.SiteHero=SiteHero;