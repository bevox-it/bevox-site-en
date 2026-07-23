import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Business Evolution X',
  description: 'The Bevox approach to connected digital, operational, AI, and software evolution.',
  alternates: { canonical: '/business-evolution' },
};

export default function BusinessEvolution(){
  return <main className="prose-page"><section className="section"><div className="container prose">
    <div className="kicker">Business Evolution X</div>
    <h1>The system behind what comes next.</h1>
    <p>Business evolution is the continuous improvement of how a company creates value, runs its operations, serves customers, uses data, and adapts. It is broader than digital transformation and more practical than an isolated AI initiative.</p>
    <h2>Why X?</h2>
    <p>X represents the capability a business needs next: transformation, acceleration, intelligence, connection, scale — and the unknown opportunity that becomes visible once operational friction is removed.</p>
    <h2>One connected model</h2>
    <p>We bring together digital experience, operational design, AI automation, and custom software. The result is not another layer of tools. It is a clearer operating model with fewer manual steps, stronger information flow, and better control.</p>
    <h2>How evolution starts</h2>
    <p>We begin with one important process. We map the current work, quantify friction, design the improved system, and build the smallest version that can prove value. From there, the system expands around verified needs.</p>
    <a className="btn-primary button" href="https://cal.com/bevox/30min" target="_blank" rel="noreferrer">Discuss your next evolution <ArrowRight size={18}/></a>
    <Link className="btn-secondary button" href="/business-evolution/framework" style={{marginLeft:12}}>Explore the framework</Link>
  </div></section></main>;
}
