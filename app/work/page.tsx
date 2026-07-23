import ListingPage from '@/components/ListingPage';
import { workPages } from '@/lib/commercial';
export const metadata={title:'Work',description:'Selected Bevox work across operational systems, AI products, SaaS, portals, and digital evolution.'};
export default function Page(){return <ListingPage kicker="Work" title="Business evolution, made tangible." desc="Selected platforms, products, and digital systems. We show what changed and what was built—without inventing vanity metrics." items={workPages.map(x=>({slug:x.slug,title:x.title,desc:x.intro}))}/>}
