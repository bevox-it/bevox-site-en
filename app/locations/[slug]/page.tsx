import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locations, type LocationSlug } from '@/lib/locations';

export function generateStaticParams(){ return Object.keys(locations).map(slug => ({ slug })); }

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
  const {slug}=await params; const market=locations[slug as LocationSlug];
  if(!market) return {};
  return { title:`Bevox in ${market.name}`, description:market.context, alternates:{canonical:`/locations/${slug}`} };
}

export default async function LocationPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const market=locations[slug as LocationSlug]; if(!market) notFound();
  return <main className="prose-page"><section className="section"><div className="container prose">
    <div className="kicker">{market.name}</div><h1>{market.title}</h1><p>{market.context}</p>
    <h2>Where we create value</h2><ul>{market.focus.map(item=><li key={item}>{item}</li>)}</ul>
    <h2>How we collaborate</h2><p>Projects are structured around clear decisions, visible progress, and direct access to the people designing and building the system. Engagement can begin with a focused process assessment or a defined product build.</p>
    <a className="btn-primary button" href="https://cal.com/bevox/30min" target="_blank" rel="noreferrer">Book a strategy call</a>
  </div></section></main>;
}
