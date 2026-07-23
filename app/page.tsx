import Link from 'next/link';
import { ArrowRight, Bot, Braces, ChartNoAxesCombined, CircuitBoard, Globe2, Network, Sparkles } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import Schema from '@/components/Schema';

const pillars = [
  { icon: Globe2, number: '01', title: 'Digital', text: 'Customer experiences, portals, websites, and tools that make your business easier to access and use.' },
  { icon: Network, number: '02', title: 'Operational', text: 'Connected workflows, clear ownership, reliable data, and one operating rhythm across the company.' },
  { icon: Bot, number: '03', title: 'AI-powered', text: 'Agents and automation applied where they remove real work, reduce delay, and improve decisions.' },
  { icon: Braces, number: '04', title: 'Software', text: 'Custom systems built around your processes when off-the-shelf tools force the wrong way of working.' },
];

const evolution = [
  ['Fragmented tools', 'One connected operation'],
  ['Repeated manual work', 'Automated workflows'],
  ['Decisions made in the dark', 'Live operational intelligence'],
  ['Software that dictates the process', 'Systems shaped around the business'],
];

const faq = [
  ['What does Business Evolution X mean?', 'It is our model for improving the whole operating environment of a company. X stands for what comes next: transformation, intelligence, connection, acceleration, and scale.'],
  ['Do you start with AI?', 'No. We start with the business process and the outcome. AI is used only when it is the strongest practical tool for the job.'],
  ['Can Bevox improve an existing system?', 'Yes. We can connect, modernize, automate, or selectively replace existing tools without forcing a complete rebuild.'],
  ['Where does Bevox work?', 'We work with companies across the United States and Europe, with focus markets in Serbia, Austria, Germany, Hungary, Bulgaria, and Malta.'],
];

export default function Home(){
  return (
    <main>
      <Schema data={{
        '@context':'https://schema.org',
        '@type':'WebSite',
        name:'Bevox',
        url:'https://bevox.co',
        description:'Business Evolution X — digital systems, connected operations, AI automation, and custom software.',
      }}/>
      <section className="hero">
        <div className="hero-orb hero-orb-one"/><div className="hero-orb hero-orb-two"/><div className="grid-bg"/>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="kicker"><Sparkles size={14}/> Business Evolution X</div>
            <h1>Evolve how your <span className="gradient-text">business works.</span></h1>
            <p>Bevox designs and builds digital systems, AI automation, custom software, and connected operations that move businesses forward.</p>
            <div className="hero-actions">
              <a className="btn-primary button" href="https://cal.com/bevox/30min" target="_blank" rel="noreferrer">Book a strategy call <ArrowRight size={18}/></a>
              <Link className="btn-secondary button" href="/business-evolution">Explore Business Evolution X</Link>
            </div>
            <div className="hero-proof"><span>Built in Europe</span><span>Working across borders</span><span>One intelligent operation</span></div>
          </div>
          <div className="evolution-visual" aria-label="From fragmented processes to an intelligent operation">
            <div className="visual-top"><span>Business Evolution Engine</span><span className="status"><i/> Live</span></div>
            <div className="visual-core">
              <div className="core-ring ring-one"/><div className="core-ring ring-two"/>
              <CircuitBoard size={38}/><strong>BEVOX</strong><small>Connected intelligence</small>
            </div>
            <div className="signal signal-a">Process</div><div className="signal signal-b">Data</div>
            <div className="signal signal-c">AI</div><div className="signal signal-d">People</div>
            <div className="visual-metric"><ChartNoAxesCombined/><span><strong>One system</strong><small>Clear operations</small></span></div>
          </div>
        </div>
      </section>

      <section className="section intro-section"><div className="container">
        <SectionTitle kicker="The complete picture" title="Business evolution is not a software purchase." desc="It is the deliberate redesign of how people, processes, data, technology, and intelligence work together."/>
        <div className="pillar-grid">{pillars.map(({icon:Icon,...p})=><article className="pillar-card" key={p.title}><div className="pillar-head"><Icon/><span>{p.number}</span></div><h3>{p.title}</h3><p>{p.text}</p></article>)}</div>
      </div></section>

      <section className="section"><div className="container split-section">
        <div><div className="kicker">The shift</div><h2>From operational friction to forward motion.</h2><p className="section-copy">We find where work slows down, information gets lost, and decisions lack context. Then we design the operating system that removes that friction.</p><Link href="/services" className="text-link">See what we build <ArrowRight size={17}/></Link></div>
        <div className="evolution-list">{evolution.map(([from,to])=><div key={from}><span>{from}</span><ArrowRight/><strong>{to}</strong></div>)}</div>
      </div></section>

      <section className="section"><div className="container">
        <SectionTitle kicker="How we work" title="Start with the business. Build only what moves it forward."/>
        <div className="step-grid">{['Understand the operation','Map the highest-value change','Design the connected system','Build, launch, and improve'].map((x,i)=><div className="step" key={x}><span>0{i+1}</span><h3>{x}</h3></div>)}</div>
      </div></section>

      <section className="section"><div className="container location-callout">
        <div><div className="kicker">Where we work</div><h2>Built in Europe. Working across borders.</h2><p>Serving companies across the USA, Serbia, Austria, Germany, Hungary, Bulgaria, and Malta.</p></div>
        <Link className="btn-secondary button" href="/locations">Explore locations <ArrowRight size={18}/></Link>
      </div></section>

      <section className="section"><div className="container">
        <SectionTitle kicker="Clear answers" title="Business evolution, without the buzzwords."/>
        <div className="faq-list">{faq.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>
      </div></section>

      <section className="section final-cta"><div className="container panel">
        <div><div className="kicker">Your next operating model</div><h2>Tell us what is still manual, disconnected, or holding the business back.</h2></div>
        <div className="cta-actions"><a className="btn-primary button" href="https://cal.com/bevox/30min" target="_blank" rel="noreferrer">Book a strategy call</a><Link href="/contact" className="btn-secondary button">Send an inquiry</Link></div>
      </div></section>
    </main>
  );
}
