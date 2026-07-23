import ListingPage from '@/components/ListingPage';
import { industryPages } from '@/lib/commercial';
export const metadata={title:'Industries',description:'Connected systems and AI-powered operations for process-heavy industries.'};
export default function Page(){return <ListingPage kicker="Industries" title="Built for the reality of the operation." desc="We work best where recurring processes, documents, decisions, teams, and data must move together." items={industryPages.map(x=>({slug:x.slug,title:x.title,desc:x.intro}))}/>}
