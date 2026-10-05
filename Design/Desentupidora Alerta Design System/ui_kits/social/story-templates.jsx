const {Logo,WhatsAppContact,CheckList,Badge,Button,WhatsAppIcon}=window.DesentupidoraAlertaDesignSystem_e6b749;
const Photo=({label,style})=><div style={{border:'3px dashed rgba(255,255,255,.45)',borderRadius:16,display:'flex',alignItems:'center',justifyContent:'center',color:'rgba(255,255,255,.7)',font:'500 28px var(--font-sans)',textAlign:'center',padding:24,...style}}>{label}</div>;
const SS={width:1080,height:1920,position:'relative',overflow:'hidden',display:'flex',flexDirection:'column',alignItems:'center',fontFamily:'var(--font-sans)',color:'#fff',padding:'160px 80px 200px'};
function StoryServico(){return <div style={{...SS,background:'var(--grain),var(--grad-forest)',backgroundBlendMode:'overlay,normal'}}>
<div style={{position:'absolute',width:1400,height:1400,borderRadius:'50%',border:'2px solid rgba(166,216,90,.35)',left:-900,top:-300}}></div>
<Logo height={120}/><div style={{marginTop:90,font:'800 170px/0.9 var(--font-sans)',textTransform:'uppercase',letterSpacing:'-.035em',textAlign:'center'}}>Limpa<br/>fossa<br/>hoje.</div>
<Photo label="Foto: equipe / caminhão" style={{width:'100%',flex:1,margin:'70px 0'}}/>
<CheckList size={52} items={['Caminhão vácuo até 20m³','Rastreável','Ambientalmente correto']}/>
<div style={{marginTop:70,'--label-bg':'#17463A'}}><WhatsAppContact scale={2.2}/></div></div>}
function StoryPergunta(){return <div style={{...SS,background:'var(--grain),var(--grad-teal)',backgroundBlendMode:'overlay,normal',justifyContent:'center',gap:60}}>
<div style={{font:'800 64px var(--font-sans)',color:'var(--lime-500)'}}>❝</div>
<div style={{font:'600 110px/1.02 var(--font-sans)',letterSpacing:'-.02em',textAlign:'center'}}>A maioria das pessoas nunca parou pra pensar nisso…</div>
<div style={{transform:'scale(2.4)',margin:'50px 0'}}><Badge tone="white">Leia a legenda</Badge></div>
<Button variant="whatsapp" size="lg" icon={<WhatsAppIcon size={56}/>} style={{height:140,fontSize:52,padding:'0 70px'}}>Atendimento via WhatsApp</Button>
<div style={{position:'absolute',bottom:150}}><Logo height={110}/></div></div>}
function StoryAviso(){return <div style={{...SS,background:'var(--lime-500)',color:'var(--teal-700)',justifyContent:'center',gap:80}}>
<div style={{width:240,height:240,border:'7px solid var(--teal-700)',borderRadius:52,display:'flex',alignItems:'center',justifyContent:'center'}}><Logo variant="symbol" height={100}/></div>
<div style={{font:'700 104px/1.1 var(--font-sans)',textAlign:'center'}}>Horário de<br/><span style={{background:'var(--teal-700)',color:'#fff',padding:'0 16px'}}>fim de ano</span></div>
<div style={{background:'var(--teal-700)',color:'#fff',borderRadius:70,padding:'80px 70px',font:'400 52px/1.4 var(--font-sans)',textAlign:'center'}}>Atendimento de emergência <b>24h</b> mantido.<br/><span style={{color:'var(--lime-400)'}}>Escritório retorna dia <b>02/01</b>.</span></div>
<div style={{background:'var(--lime-100)',borderRadius:999,padding:'24px 80px',font:'500 52px var(--font-sans)'}}>Boas festas!</div></div>}
window.StoryTemplates={StoryServico,StoryPergunta,StoryAviso};