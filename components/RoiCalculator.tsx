'use client';
import { useMemo,useState } from 'react';
import Link from 'next/link';

const money=(n:number)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
export default function RoiCalculator(){
 const [people,setPeople]=useState(8),[hours,setHours]=useState(10),[rate,setRate]=useState(35),[automation,setAutomation]=useState(55),[investment,setInvestment]=useState(30000);
 const r=useMemo(()=>{const annual=people*hours*rate*52;const saved=annual*automation/100;const net=saved-investment;return{annual,saved,net,payback:saved?investment/(saved/12):0,roi:investment?net/investment*100:0}},[people,hours,rate,automation,investment]);
 return <div className="calculator-shell"><div className="calculator-inputs">
  <label><span>People involved <b>{people}</b></span><input type="range" min="1" max="100" value={people} onChange={e=>setPeople(+e.target.value)}/></label>
  <label><span>Manual hours per person / week <b>{hours}h</b></span><input type="range" min="1" max="40" value={hours} onChange={e=>setHours(+e.target.value)}/></label>
  <label><span>Blended hourly cost <b>{money(rate)}</b></span><input type="range" min="10" max="200" step="5" value={rate} onChange={e=>setRate(+e.target.value)}/></label>
  <label><span>Potential reduction <b>{automation}%</b></span><input type="range" min="10" max="90" step="5" value={automation} onChange={e=>setAutomation(+e.target.value)}/></label>
  <label><span>Estimated implementation <b>{money(investment)}</b></span><input type="range" min="5000" max="250000" step="5000" value={investment} onChange={e=>setInvestment(+e.target.value)}/></label>
 </div><div className="calculator-results"><span>Directional annual opportunity</span><strong>{money(r.saved)}</strong><div><p>Current annual manual cost <b>{money(r.annual)}</b></p><p>First-year net value <b>{money(r.net)}</b></p><p>Estimated payback <b>{r.payback.toFixed(1)} months</b></p><p>First-year ROI <b>{Math.round(r.roi)}%</b></p></div><small>This is a directional model, not a guarantee. A workflow diagnosis validates assumptions, exceptions, adoption, and implementation scope.</small><Link href="/contact" className="button btn-primary">Validate the opportunity</Link></div></div>
}
