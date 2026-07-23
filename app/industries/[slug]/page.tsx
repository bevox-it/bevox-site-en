import { notFound } from 'next/navigation';
import CommercialPage from '@/components/CommercialPage';
import { findPage,industryPages } from '@/lib/commercial';
export const dynamicParams=false;
export function generateStaticParams(){return industryPages.map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const p=findPage(industryPages,(await params).slug);return p?{title:p.title,description:p.intro,alternates:{canonical:`/industries/${p.slug}`}}:{}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const p=findPage(industryPages,(await params).slug);if(!p)notFound();return <CommercialPage page={p}/>}
