import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Insight } from '@/lib/insights';

export default function InsightCard({ article }: { article: Insight }) {
  return <Link className="insight-card" href={`/evolution-hub/${article.slug}`}>
    <div><span>{article.category}</span><span>{article.readTime}</span></div>
    <h2>{article.title}</h2>
    <p>{article.description}</p>
    <strong>Read insight <ArrowUpRight size={16}/></strong>
  </Link>;
}
