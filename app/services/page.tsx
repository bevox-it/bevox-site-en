import ListingPage from '@/components/ListingPage';
import { services } from '@/lib/data';
export const metadata={title:'Services',description:'AI, automation, software, systems, integrations, digital experience, and business evolution services by Bevox.'};
export default function Page(){return <ListingPage kicker="Services" title="Capabilities built around business evolution." desc="From one broken workflow to a connected operating system, we combine strategy, AI, automation, product design, and engineering." items={services}/>}
