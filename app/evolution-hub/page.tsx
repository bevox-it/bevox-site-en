import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Layers3, Microscope, NotebookPen } from 'lucide-react';
import InsightCard from '@/components/InsightCard';
import { insights } from '@/lib/insights';

export const metadata: Metadata = {
  title: 'Evolution Hub',
  description: 'Research, systems, playbooks, and field notes for digital, operational, and AI-powered business evolution.',
  alternates: { canonical: '/evolution-hub' },
};

const tracks = [
  { icon: BookOpen, title: 'Insights', text: 'Clear thinking on technology, operations, AI, and business change.' },
  { icon: NotebookPen, title: 'Playbooks', text: 'Practical methods your team can apply to real processes.' },
  { icon: Layers3, title: 'Systems', text: 'Operating models, architectures, and connected system design.' },
  { icon: Microscope, title: 'Field Notes', text: 'Patterns and lessons observed while building real products.' },
];

export default function EvolutionHub() {
  const featured = insights.filter((x) => x.featured);
  return <main className="hub-page">
    <section className="hub-hero"><div className="grid-bg"/><div className="hero-orb hero-orb-one"/><div className="container">
      <span className="kicker">Evolution Hub</span>
      <h1>Ideas for building what comes next.</h1>
      <p>Original frameworks, practical playbooks, and field-tested thinking for leaders evolving how their businesses work.</p>
    </div></section>
    <section className="hub-featured"><div className="container featured-grid">
      {featured.map((article, index) => <Link key={article.slug} href={`/evolution-hub/${article.slug}`} className="featured-insight">
        <span>Featured 0{index + 1}</span><h2>{article.title}</h2><p>{article.description}</p><strong>{article.readTime} read <ArrowRight size={16}/></strong>
      </Link>)}
    </div></section>
    <section className="section compact-section"><div className="container">
      <div className="hub-tracks">{tracks.map(({icon:Icon,...track}) => <article key={track.title}><Icon/><h3>{track.title}</h3><p>{track.text}</p></article>)}</div>
    </div></section>
    <section className="section compact-section"><div className="container">
      <div className="hub-heading"><div><span className="kicker">Latest thinking</span><h2>Explore the system, not the noise.</h2></div><Link href="/business-evolution/framework">View our framework <ArrowRight size={16}/></Link></div>
      <div className="insight-grid">{insights.map((article) => <InsightCard key={article.slug} article={article}/>)}</div>
    </div></section>
  </main>;
}
