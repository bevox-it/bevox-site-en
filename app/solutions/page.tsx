import ListingPage from '@/components/ListingPage';
import { solutions } from '@/lib/commercial';
export const metadata={title:'Solutions',description:'Practical solutions for manual work, fragmented tools, spreadsheets, reporting, portals, and AI-powered operations.'};
export default function Page(){return <ListingPage kicker="Solutions" title="Start with the constraint, not the technology." desc="The strongest systems solve a specific operational problem. Find the future state your business needs." items={solutions.map(x=>({slug:x.slug,title:x.title,desc:x.intro}))}/>}
