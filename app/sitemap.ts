import type { MetadataRoute } from 'next';
import { locations } from '@/lib/locations';
import { industryPages,servicePages,solutions,workPages } from '@/lib/commercial';

const routes = ['', '/business-evolution', '/services', '/solutions', '/industries', '/work', '/process', '/about', '/locations', '/roi-calculator', '/process-map', '/contact', '/privacy', '/terms', '/thank-you'];
export default function sitemap(): MetadataRoute.Sitemap {
  const locationRoutes = Object.keys(locations).map(slug => `/locations/${slug}`);
  const commercialRoutes = [
    ...servicePages.map(x=>`/services/${x.slug}`),
    ...solutions.map(x=>`/solutions/${x.slug}`),
    ...industryPages.map(x=>`/industries/${x.slug}`),
    ...workPages.map(x=>`/work/${x.slug}`),
  ];
  return [...routes,...locationRoutes,...commercialRoutes].map(route => ({
    url:`https://bevox.co${route}`,
    lastModified:new Date(),
    changeFrequency:route === '' ? 'weekly' : 'monthly',
    priority:route === '' ? 1 : route === '/thank-you' ? 0.2 : 0.8,
  }));
}
