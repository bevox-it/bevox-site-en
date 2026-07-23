import Link from 'next/link';
import { ArrowUpRight, Bot, BrainCircuit, Braces, ChartNoAxesCombined, CloudCog, CodeXml, DatabaseZap, Gauge, GitBranch, Layers3, Network, Orbit, PanelsTopLeft, RefreshCw, Workflow } from 'lucide-react';
const icons=[Bot,BrainCircuit,Workflow,CodeXml,Layers3,PanelsTopLeft,DatabaseZap,CloudCog,ChartNoAxesCombined,Network,Braces,RefreshCw,Orbit,Gauge,GitBranch];
export default function ListingPage({kicker,title,desc,items}:{kicker:string;title:string;desc:string;items:{slug:string;title:string;desc?:string}[]}){
 return <main className={`listing-page listing-${kicker.toLowerCase()}`}><section className="listing-hero"><div className="grid-bg"/><div className="container"><span className="kicker">{kicker}</span><h1>{title}</h1><p>{desc}</p></div></section><section className="section compact-card-section"><div className="container listing-grid">{items.map((x,i)=>{const Icon=icons[i%icons.length];return <Link className="listing-card" key={x.slug} href={`/${kicker.toLowerCase()}/${x.slug}`}><span>{String(i+1).padStart(2,'0')}</span><ArrowUpRight/><Icon className="listing-icon"/><h2>{x.title}</h2>{x.desc&&<p>{x.desc}</p>}</Link>})}</div></section></main>
}
