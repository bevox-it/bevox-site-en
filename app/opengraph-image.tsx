import { ImageResponse } from 'next/og';

export const alt = 'Bevox — Business Evolution X';
export const size = { width:1200, height:630 };
export const contentType = 'image/png';

export default function Image(){
  return new ImageResponse(
    <div style={{width:'100%',height:'100%',display:'flex',position:'relative',background:'#07070c',color:'white',padding:'78px',fontFamily:'Arial'}}>
      <div style={{position:'absolute',width:520,height:520,borderRadius:999,background:'#5b5bff',filter:'blur(120px)',opacity:.28,top:-260,left:-100}}/>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',zIndex:2}}>
        <div style={{display:'flex',alignItems:'center',gap:18}}>
          <div style={{width:68,height:68,borderRadius:19,background:'linear-gradient(135deg,#5b5bff,#8a63ff)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:30}}>◇</div>
          <div style={{fontSize:30,fontWeight:700}}>BEVOX</div>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <div style={{fontSize:22,letterSpacing:6,color:'#9deeff',textTransform:'uppercase'}}>Business Evolution X</div>
          <div style={{fontSize:76,lineHeight:1.02,fontWeight:700,letterSpacing:-4,marginTop:24,maxWidth:930}}>Evolve how your business works.</div>
          <div style={{fontSize:24,color:'#a9afbd',marginTop:28}}>Digital. Operational. AI-powered. Complete.</div>
        </div>
      </div>
    </div>,
    size
  );
}
