import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Schema from '@/components/Schema';
import InsightCard from '@/components/InsightCard';
import { insightBySlug, insights } from '@/lib/insights';

export function generateStaticParams() { return insights.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const { slug } = await params;
  const article = insightBySlug(slug);
  if (!article) return {};
  return { title: article.title, description: article.description, alternates: { canonical: `/evolution-hub/${slug}` }, openGraph: { type: 'article', title: article.title, description: article.description } };
}

export default async function InsightPage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const article = insightBySlug(slug);
  if (!article) notFound();
  const relatedArticles = insights.filter((x) => x.slug !== slug && x.category === article.category).slice(0, 2);
  return <main className="article-page">
    <Schema data={{'@context':'https://schema.org','@type':'Article',headline:article.title,description:article.description,datePublished:article.published,dateModified:article.published,author:{'@type':'Organization',name:'Bevox'},publisher:{'@type':'Organization',name:'Bevox',url:'https://bevox.co'},mainEntityOfPage:`https://bevox.co/evolution-hub/${article.slug}`}}/>
    <header className="article-hero"><div className="grid-bg"/><div className="container article-head">
      <Link href="/evolution-hub"><ArrowLeft size={16}/> Evolution Hub</Link>
      <div className="article-meta"><span>{article.category}</span><span>{article.readTime} read</span><time dateTime={article.published}>July 23, 2026</time></div>
      <h1>{article.title}</h1><p>{article.description}</p>
    </div></header>
    <article className="article-body container">
      <aside><span>In this insight</span>{article.sections.map((section,index)=><a key={section.title} href={`#section-${index+1}`}>0{index+1} · {section.title}</a>)}</aside>
      <div>{article.sections.map((section,index)=><section id={`section-${index+1}`} key={section.title}>
        <span>0{index+1}</span><h2>{section.title}</h2>{section.paragraphs.map((p)=><p key={p}>{p}</p>)}
        {section.points && <ul>{section.points.map((point)=><li key={point}>{point}</li>)}</ul>}
      </section>)}
      <div className="article-related-links"><span>Continue exploring</span>{article.related.map((href)=><Link key={href} href={href}>{href.split('/').pop()?.replaceAll('-',' ')} <ArrowRight size={15}/></Link>)}</div>
      </div>
    </article>
    {relatedArticles.length > 0 && <section className="section compact-section subtle-section"><div className="container"><span className="kicker">Related thinking</span><div className="insight-grid compact-insights">{relatedArticles.map((item)=><InsightCard key={item.slug} article={item}/>)}</div></div></section>}
  </main>;
}
