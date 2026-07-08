import type { MetadataRoute } from 'next';
const routes = ['', '/services', '/industries', '/process', '/about', '/contact', '/privacy', '/terms'];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map(route => ({ url: `https://bevox.co${route}`, lastModified: new Date(), changeFrequency: 'monthly', priority: route === '' ? 1 : 0.8 })); }
