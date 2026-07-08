import Link from 'next/link';
import { ArrowRight, Bot, Workflow, Database, Gauge, ShieldCheck, Zap } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { industries, process, services } from '@/lib/data';

export default function Home(){
  return <main>
    <section className="relative min-h-screen pt-36 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="container relative">
        <div className="max-w-5xl">
          <div className="kicker">AI Operations Company</div>
          <h1 className="mt-6 text-5xl md:text-8xl font-bold tracking-[-0.06em] leading-[.95]">AI-powered operational systems for growing businesses.</h1>
          <p className="mt-8 max-w-3xl text-xl text-gray-300 leading-9">Bevox designs and builds automation, AI agents, internal systems, dashboards, and integrations that remove repetitive work and give teams operational control.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4"><Link className="btn-primary rounded-2xl px-6 py-4 font-semibold transition inline-flex items-center gap-2" href="/contact">Book a strategy call <ArrowRight size={18}/></Link><Link className="btn-secondary rounded-2xl px-6 py-4 font-semibold transition" href="/services">Explore services</Link></div>
        </div>
        <div className="mt-16 panel rounded-3xl p-5 md:p-8 grid md:grid-cols-5 gap-4">
          {['Manual work','AI routing','Approval','ERP / CRM','Live dashboard'].map((x,i)=><div key={x} className="card rounded-2xl p-5"><div className="text-cyan-300 text-sm">0{i+1}</div><div className="mt-6 font-semibold">{x}</div></div>)}
        </div>
      </div>
    </section>
    <section className="section"><div className="container"><SectionTitle kicker="What we fix" title="Your operations should not live in emails, spreadsheets, and chat threads." desc="Most companies do not need more software. They need fewer disconnected steps, clearer ownership, better visibility, and automation where work repeats."/><div className="mt-10 grid md:grid-cols-3 gap-5">{['Disconnected tools','Manual admin','No operational visibility'].map(t=><div className="card rounded-3xl p-7" key={t}><h3 className="text-xl font-bold">{t}</h3><p className="mt-4 text-gray-400 leading-7">We turn scattered processes into structured systems with clear data, reliable workflows, and measurable outcomes.</p></div>)}</div></div></section>
    <section className="section"><div className="container"><SectionTitle kicker="Services" title="Systems, automations, and AI workflows built around how your company actually works."/><div className="mt-10 grid md:grid-cols-3 gap-5">{services.map((s,idx)=>{const icons=[Bot,Workflow,Database,Zap,ShieldCheck,Gauge];const Icon=icons[idx];return <Link href={`/services#${s.slug}`} key={s.slug} className="card rounded-3xl p-7 hover:bg-white/10 transition"><Icon className="text-cyan-300"/><h3 className="mt-6 text-xl font-bold">{s.title}</h3><p className="mt-4 text-gray-400 leading-7">{s.desc}</p></Link>})}</div></div></section>
    <section className="section"><div className="container"><SectionTitle kicker="Industries" title="Built for teams where operations matter."/><div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{industries.map(i=><Link href="/industries" className="card rounded-3xl p-7 text-xl font-bold hover:bg-white/10 transition" key={i}>{i}<p className="mt-4 text-base font-normal text-gray-400 leading-7">Automate intake, approvals, reporting, scheduling, documentation, and internal coordination.</p></Link>)}</div></div></section>
    <section className="section"><div className="container"><SectionTitle kicker="Process" title="From operational mess to reliable system."/><div className="mt-10 grid md:grid-cols-6 gap-4">{process.map((p,i)=><div key={p} className="card rounded-2xl p-5"><div className="text-cyan-300">{String(i+1).padStart(2,'0')}</div><div className="mt-5 font-semibold">{p}</div></div>)}</div></div></section>
    <section className="section"><div className="container panel rounded-[2rem] p-8 md:p-14 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center"><div><div className="kicker">Ready</div><h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">Build the operating system your team needs.</h2><p className="mt-5 text-gray-400 max-w-2xl leading-7">Start with one process. Prove the ROI. Expand from there.</p></div><Link href="/contact" className="btn-primary rounded-2xl px-6 py-4 font-semibold transition whitespace-nowrap">Book a call</Link></div></section>
  </main>
}
