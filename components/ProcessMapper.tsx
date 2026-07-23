'use client';
import { useMemo,useState } from 'react';
import Link from 'next/link';
const labels=['Trigger','Input','Work','Decision','Output'];
export default function ProcessMapper(){
 const [values,setValues]=useState(['A request arrives','Email or form','Review and update records','Approval required','Confirmation and report']);
 const [volume,setVolume]=useState(100),[minutes,setMinutes]=useState(20),[errors,setErrors]=useState(5);
 const score=useMemo(()=>Math.min(100,Math.round(volume*minutes/500+errors*4)),[volume,minutes,errors]);
 const update=(i:number,v:string)=>setValues(a=>a.map((x,n)=>n===i?v:x));
 return <div className="mapper-shell"><div className="map-flow">{labels.map((label,i)=><div className="map-node" key={label}><span>0{i+1} · {label}</span><textarea value={values[i]} onChange={e=>update(i,e.target.value)} aria-label={label}/>{i<labels.length-1&&<i>→</i>}</div>)}</div><div className="map-diagnostics"><div><label>Monthly volume <input type="number" min="1" value={volume} onChange={e=>setVolume(+e.target.value)}/></label><label>Minutes per item <input type="number" min="1" value={minutes} onChange={e=>setMinutes(+e.target.value)}/></label><label>Exception / error rate % <input type="number" min="0" max="100" value={errors} onChange={e=>setErrors(+e.target.value)}/></label></div><aside><span>Automation opportunity</span><strong>{score}/100</strong><p>{score>65?'Strong candidate for structured automation.':score>35?'Worth diagnosing—especially the decisions and exceptions.':'Improve the map and look for a higher-volume constraint.'}</p><Link className="button btn-primary" href="/contact">Map it with Bevox</Link></aside></div></div>
}
