import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Blocks, Compass, Network, ScanSearch, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Business Evolution Framework',
  description: 'The Bevox five-movement framework for diagnosing, designing, building, connecting, and compounding business evolution.',
  alternates: { canonical: '/business-evolution/framework' },
};

const movements = [
  {icon:ScanSearch,title:'Diagnose',output:'Evolution brief',text:'Expose the constraint, baseline, risk, and highest-value opportunity.'},
  {icon:Compass,title:'Design',output:'Future-state blueprint',text:'Redesign the workflow, ownership, information, and user experience.'},
  {icon:Blocks,title:'Build',output:'Operational product',text:'Launch the smallest complete system capable of proving real value.'},
  {icon:Network,title:'Connect',output:'Intelligent operation',text:'Integrate tools, data, automation, reporting, and bounded AI.'},
  {icon:TrendingUp,title:'Compound',output:'Evolution roadmap',text:'Measure adoption and outcomes, then expand from verified evidence.'},
];

export default function FrameworkPage() {
  return <main className="framework-page">
    <section className="framework-hero"><div className="grid-bg"/><div className="container"><span className="kicker">Proprietary operating model</span><h1>The Business Evolution Framework.</h1><p>Five connected movements that turn operational friction into a working system—and a working system into a compounding advantage.</p></div></section>
    <section className="framework-map"><div className="container"><div className="framework-line">{movements.map(({icon:Icon,...item},index)=><article key={item.title}><span>0{index+1}</span><Icon/><h2>{item.title}</h2><p>{item.text}</p><strong>{item.output}</strong></article>)}</div></div></section>
    <section className="section compact-section"><div className="container two-column-section"><div><span className="kicker">Decision gates</span><h2>Evidence before expansion.</h2><p className="section-copy">Each movement ends with a clear decision: proceed, refine, pause, or stop. Technology investment grows only when operational evidence supports it.</p></div><div className="framework-principles">{['Start with the business constraint','Design the better process before automating','Build one complete outcome','Keep exceptions and ownership visible','Measure adoption and operating impact'].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div></div></section>
    <section className="section"><div className="container proof-panel"><div><span className="kicker">Apply the framework</span><h2>Bring us one process that is still manual, fragmented, or opaque.</h2></div><div className="cta-actions"><Link className="button btn-secondary" href="/process-map">Map your process</Link><a className="button btn-primary" href="https://cal.com/bevox/30min" target="_blank" rel="noreferrer">Book a strategy call <ArrowRight size={16}/></a></div></div></section>
  </main>;
}
