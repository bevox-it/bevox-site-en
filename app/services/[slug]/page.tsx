import { notFound } from 'next/navigation';
import CommercialPage from '@/components/CommercialPage';
import { findPage,servicePages } from '@/lib/commercial';
export const dynamicParams=false;
export function generateStaticParams(){return servicePages.map(({slug})=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const p=findPage(servicePages,(await params).slug);return p?{title:p.title,description:p.intro,alternates:{canonical:`/services/${p.slug}`}}:{}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const p=findPage(servicePages,(await params).slug);if(!p)notFound();return <CommercialPage page={p}/>}
