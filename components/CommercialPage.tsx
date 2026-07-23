import Link from 'next/link';
import { ArrowRight, Check, Orbit } from 'lucide-react';

type Props={page:{title:string;eyebrow:string;intro:string;outcomes:string[];capabilities:string[];proof:string;metric:string;related:string[]}}

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
    <section className="section"><div className="container two-column-section"><div><span className="kicker">What changes</span><h2>Move the operation forward.</h2><p className="section-copy">We define success in operational terms, then design the technology required to create it.</p></div><div className="check-list">{page.outcomes.map(x=><div key={x}><Check size={17}/><span>{x}</span></div>)}</div></div></section>
    <section className="section subtle-section"><div className="container"><span className="kicker">What we bring</span><h2>Strategy through implementation.</h2><div className="capability-grid">{page.capabilities.map((x,i)=><article key={x}><span>0{i+1}</span><Orbit/><h3>{x}</h3></article>)}</div></div></section>
    <section className="section"><div className="container"><div className="proof-panel"><div><span className="kicker">Bevox principle</span><h2>{page.proof}</h2></div><strong>{page.metric}</strong></div>
      <div className="related-links">{page.related.map(h=><Link key={h} href={h}>{labels[h] || h.split('/').pop()?.replaceAll('-',' ')} <ArrowRight size={15}/></Link>)}</div>
    </div></section>
  </main>
}
