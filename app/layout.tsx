import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://bevox.co'),
  title: { default: 'Bevox — AI Operations Company', template: '%s — Bevox' },
  description: 'Bevox builds AI-powered operational systems for growing companies: automation, custom software, integrations, dashboards, and AI agents.',
  openGraph: { title: 'Bevox — AI Operations Company', description: 'AI-powered systems that automate work and give companies operational control.', url: 'https://bevox.co', siteName: 'Bevox', type: 'website' },
  robots: { index: true, follow: true }
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Nav />{children}<Footer /></body></html>}
