import Link from 'next/link';
import { ArrowRight, BarChart3, CalendarDays, Check, Gauge, HeartPulse, Network, Sparkles } from 'lucide-react';

type Work = {
  title:string; eyebrow:string; intro:string; outcomes:string[]; capabilities:string[];
  proof:string; metric:string; metrics?:{value:string;label:string}[]; visual?:string;
};

function ProductVisual({type='operations'}:{type?:string}){
  if(type==='calendar') return <div className="product-ui calendar-ui"><div className="ui-sidebar"><span/><span/><span/><span/></div><div className="calendar-board"><div className="ui-top"><b>Availability</b><small>July 2026</small></div><div className="calendar-days">{['M','T','W','T','F','S','S'].map((x,i)=><i key={i}>{x}</i>)}</div><div className="calendar-slots">{Array.from({length:21},(_,i)=><span className={i===10?'selected':''} key={i}>{i+1}</span>)}</div><div className="time-slots"><b>10:00</b><b>11:30</b><b>14:00</b></div></div></div>;
  if(type==='dating') return <div className="product-ui dating-ui"><div className="avatar-card"><div className="avatar-glow"><Sparkles/></div><strong>Maya</strong><small>AI match assistant</small><p>Shared values · 92%</p></div><div className="chat-stack"><span>What matters most to you?</span><span>Let&apos;s find someone who gets it.</span><span className="typing">•••</span></div></div>;
  if(type==='wellbeing') return <div className="product-ui wellbeing-ui"><div className="wellbeing-score"><HeartPulse/><strong>82</strong><span>Daily balance</span></div><div className="wave-chart"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div><div className="habit-row"><span>Sleep</span><b>7h 42m</b><span>Focus</span><b>High</b></div></div>;
  return <div className="product-ui dashboard-ui"><div className="ui-sidebar"><span/><span/><span/><span/><span/></div><div className="dashboard-board"><div className="ui-top"><b>Operations overview</b><small>Live</small></div><div className="dashboard-kpis"><span><small>Active workflows</small><b>128</b></span><span><small>Completion</small><b>94%</b></span><span><small>Exceptions</small><b>07</b></span></div><div className="dashboard-main"><div className="bar-chart">{[42,68,55,82,74,94,87].map((x,i)=><i style={{height:`${x}%`}} key={i}/>)}</div><div className="activity-list"><span/><span/><span/><span/></div></div></div></div>;
}

export default function WorkPage({page}:{page:Work}){
  return <main className="work-detail">
    <section className="work-hero"><div className="grid-bg"/><div className="container">
      <span className="kicker">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.intro}</p>
      <div className="hero-actions"><a className="button btn-primary" href="https://cal.com/bevox/30min" target="_blank" rel="noreferrer">Request a demo <ArrowRight size={16}/></a><Link className="button btn-secondary" href="/contact">Request a presentation</Link></div>
    </div></section>
    <section className="work-showcase"><div className="container"><ProductVisual type={page.visual}/></div></section>
    <section className="commercial-metrics"><div className="container metric-strip">{page.metrics?.map(x=><div key={x.label}><strong>{x.value}</strong><span>{x.label}</span></div>)}</div></section>
    <section className="section compact-section"><div className="container case-grid">
      <div><span className="kicker">The system</span><h2>{page.proof}</h2><p className="section-copy">{page.metric}</p></div>
      <div className="case-results">{page.outcomes.map(x=><div key={x}><Check/><span>{x}</span></div>)}</div>
    </div></section>
    <section className="section compact-section subtle-section"><div className="container"><span className="kicker">Product scope</span><h2>Designed as one coherent experience.</h2><div className="scope-grid">{page.capabilities.map((x,i)=><article key={x}>{i===0?<Gauge/>:i===1?<Network/>:i===2?<BarChart3/>:<CalendarDays/>}<span>0{i+1}</span><h3>{x}</h3></article>)}</div></div></section>
    <section className="section"><div className="container proof-panel"><div><span className="kicker">See it in context</span><h2>Get the walkthrough, architecture, and product presentation.</h2></div><div className="cta-actions"><a className="button btn-primary" href="https://cal.com/bevox/30min" target="_blank" rel="noreferrer">Request a demo</a><Link className="button btn-secondary" href="/contact">Request presentation</Link></div></div></section>
  </main>
}
