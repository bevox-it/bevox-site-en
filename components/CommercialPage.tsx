import Link from 'next/link';
import { ArrowRight, Check, Database, Orbit, Sparkles, Workflow } from 'lucide-react';

type Props={page:{title:string;eyebrow:string;intro:string;outcomes:string[];capabilities:string[];proof:string;metric:string;related:string[];metrics?:{value:string;label:string}[]}}

const labels:Record<string,string>={'/services':'Explore services','/solutions':'Explore solutions','/process':'See our process','/contact':'Start a conversation','/roi-calculator':'Calculate potential ROI'};

export default function CommercialPage({page}:Props){
  return <main className="commercial-page">
    <section className="commercial-hero"><div className="grid-bg"/><div className="hero-orb hero-orb-one"/>
      <div className="container commercial-hero-grid">
        <div><span className="kicker">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.intro}</p>
          <div className="hero-actions"><a className="button btn-primary" href="https://cal.com/bevox/30min" target="_blank" rel="noreferrer">Book a strategy call <ArrowRight size={16}/></a><Link className="button btn-secondary" href="/contact">Send an inquiry</Link></div>
        </div>
        <div className="outcome-panel"><span>Designed outcome</span><strong>{page.metric}</strong><p>{page.proof}</p><div className="pulse-line"><i/><i/><i/><i/><i/></div></div>
      </div>
    </section>
    <section className="commercial-metrics"><div className="container metric-strip">{(page.metrics||[{value:'01',label:'One connected source of truth'},{value:'24/7',label:'Processes that keep moving'},{value:'100%',label:'Built around the real operation'}]).map(x=><div key={x.label}><strong>{x.value}</strong><span>{x.label}</span></div>)}</div></section>
    <section className="section compact-section"><div className="container two-column-section"><div><span className="kicker">What changes</span><h2>Move the operation forward.</h2><p className="section-copy">We define success in operational terms, then design the technology required to create it.</p></div><div className="check-list">{page.outcomes.map(x=><div key={x}><Check size={17}/><span>{x}</span></div>)}</div></div></section>
    <section className="section compact-section subtle-section"><div className="container"><span className="kicker">System view</span><h2>From signal to coordinated action.</h2><div className="system-visual"><div><Database/><span>Operational data</span></div><i/><div><Sparkles/><span>Intelligence</span></div><i/><div><Workflow/><span>Automated action</span></div></div></div></section>
    <section className="section compact-section"><div className="container"><span className="kicker">What we bring</span><h2>Strategy through implementation.</h2><div className="capability-grid">{page.capabilities.map((x,i)=><article key={x}><span>0{i+1}</span><Orbit/><h3>{x}</h3></article>)}</div></div></section>
    <section className="section"><div className="container"><div className="proof-panel"><div><span className="kicker">Bevox principle</span><h2>{page.proof}</h2></div><strong>{page.metric}</strong></div>
      <div className="related-links">{page.related.map(h=><Link key={h} href={h}>{labels[h] || h.split('/').pop()?.replaceAll('-',' ')} <ArrowRight size={15}/></Link>)}</div>
    </div></section>
    <section className="authority-bridge"><div className="container"><div><span className="kicker">Go deeper</span><h2>See the thinking behind the system.</h2></div><div className="authority-links"><Link href="/business-evolution/framework">Business Evolution Framework <ArrowRight size={15}/></Link><Link href="/evolution-hub">Explore Evolution Hub <ArrowRight size={15}/></Link></div></div></section>
  </main>
}
