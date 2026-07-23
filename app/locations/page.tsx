import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { locations } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Locations',
  description: 'Bevox serves companies across the USA, Europe, the Middle East, and Australia with a distributed international team.',
  alternates: { canonical: '/locations' },
};

export default function Locations(){
  return <main className="prose-page"><section className="section"><div className="container">
    <div className="kicker">Where we work</div><h1 className="text-5xl md:text-7xl font-bold tracking-[-.05em] mt-5">Built in Europe.<br/>Working across borders.</h1>
    <p className="section-copy mt-7">Bevox serves companies across the USA, Europe, the Middle East, and Australia through direct, remote-first collaboration. These are markets we serve, not a claim of physical offices in every market.</p>
    <div className="market-grid">{Object.entries(locations).map(([slug,market])=><Link className="market-card" href={`/locations/${slug}`} key={slug}><h3>{market.name}</h3><p>{market.context}</p><span className="text-link">Explore market <ArrowRight size={16}/></span></Link>)}</div>
    <div className="team-footprint">
      <div><div className="kicker">Distributed team</div><h2>Local context. International delivery.</h2><p>Our people are based across the USA, Serbia, Ireland, Norway, Austria, Germany, Malta, and Bulgaria.</p></div>
      <div><span>Native speakers</span><strong>English</strong><strong>German</strong><strong>Italian</strong><strong>Spanish</strong></div>
    </div>
  </div></section></main>;
}
