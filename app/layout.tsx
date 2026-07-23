import type { Metadata, Viewport } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Schema from '@/components/Schema';

export const viewport: Viewport = { themeColor: '#07070c', colorScheme: 'dark' };

export const metadata: Metadata = {
  metadataBase: new URL('https://bevox.co'),
  title: { default: 'Bevox — Business Evolution X', template: '%s | Bevox' },
  description: 'Bevox designs and builds digital systems, AI automation, custom software, and connected operations that move businesses forward.',
  applicationName: 'Bevox',
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
    apple: '/apple-icon.svg',
  },
  openGraph: {
    title: 'Bevox — Business Evolution X',
    description: 'Digital. Operational. AI-powered. Complete.',
    url: 'https://bevox.co',
    siteName: 'Bevox',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Bevox — Business Evolution X' }],
  },
  twitter: { card: 'summary_large_image', title: 'Bevox — Business Evolution X', description: 'Evolve how your business works.', images: ['/opengraph-image'] },
  robots: { index: true, follow: true },
};

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bevox',
  alternateName: 'Business Evolution X',
  url: 'https://bevox.co',
  logo: 'https://bevox.co/icon.svg',
  slogan: 'Digital. Operational. AI-powered. Complete.',
  areaServed: ['United States','Serbia','Austria','Germany','Hungary','Bulgaria','Malta'],
  knowsAbout: ['AI automation','Business process automation','Custom software development','Internal business systems','Digital transformation'],
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><Schema data={organization}/><Nav />{children}<Footer /></body></html>;
}
