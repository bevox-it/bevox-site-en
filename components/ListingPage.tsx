import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export default function ListingPage({kicker,title,desc,items}:{kicker:string;title:string;desc:string;items:{slug:string;title:string;desc?:string}[]}){
 return <main className="listing-page"><section className="listing-hero"><div className="grid-bg"/><div className="container"><span className="kicker">{kicker}</span><h1>{title}</h1><p>{desc}</p></div></section><section className="section"><div className="container listing-grid">{items.map((x,i)=><Link className="listing-card" key={x.slug} href={`/${kicker.toLowerCase()}/${x.slug}`}><span>{String(i+1).padStart(2,'0')}</span><ArrowUpRight/><h2>{x.title}</h2>{x.desc&&<p>{x.desc}</p>}</Link>)}</div></section></main>
}
