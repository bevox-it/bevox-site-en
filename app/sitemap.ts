import type { MetadataRoute } from 'next';
import { locations } from '@/lib/locations';

const routes = ['', '/business-evolution', '/services', '/industries', '/process', '/about', '/locations', '/contact', '/privacy', '/terms', '/thank-you'];
export default function sitemap(): MetadataRoute.Sitemap {
  const locationRoutes = Object.keys(locations).map(slug => `/locations/${slug}`);
  return [...routes,...locationRoutes].map(route => ({
    url:`https://bevox.co${route}`,
    lastModified:new Date(),
    changeFrequency:route === '' ? 'weekly' : 'monthly',
    priority:route === '' ? 1 : route === '/thank-you' ? 0.2 : 0.8,
  }));
}
