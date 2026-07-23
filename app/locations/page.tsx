import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { locations } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Locations',
  description: 'Bevox serves companies across the United States and Europe.',
  alternates: { canonical: '/locations' },
};

export default function Locations(){
  return <main className="prose-page"><section className="section"><div className="container">
    <div className="kicker">Where we work</div><h1 className="text-5xl md:text-7xl font-bold tracking-[-.05em] mt-5">Built in Europe.<br/>Working across borders.</h1>
    <p className="section-copy mt-7">Bevox serves companies across the United States and Europe through direct, remote-first collaboration. These are markets we serve, not a claim of physical offices in every country.</p>
    <div className="market-grid">{Object.entries(locations).map(([slug,market])=><Link className="market-card" href={`/locations/${slug}`} key={slug}><h3>{market.name}</h3><p>{market.context}</p><span className="text-link">Explore market <ArrowRight size={16}/></span></Link>)}</div>
  </div></section></main>;
}
