import type { Metadata } from 'next';
import { CalendarDays, Mail } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Book a strategy call or send Bevox an inquiry about business evolution, AI automation, and custom software.',
  alternates: { canonical: '/contact' },
};

export default function Contact() {
  return <main className="prose-page"><section className="section"><div className="container">
    <div className="kicker">Start a conversation</div><h1 className="text-5xl md:text-7xl font-bold tracking-[-.05em] mt-5 max-w-4xl">Tell us what is still manual, disconnected, or holding you back.</h1>
    <div className="grid lg:grid-cols-2 gap-6 mt-12">
      <div className="card rounded-3xl p-8 md:p-10">
        <CalendarDays className="text-cyan-300"/><h2 className="text-3xl font-bold mt-6">Book directly</h2><p className="text-gray-400 leading-7 mt-4">Choose a convenient time for a focused 30-minute strategy call.</p>
        <a className="btn-primary button mt-7" href="https://cal.com/bevox/30min" target="_blank" rel="noreferrer">Open calendar</a>
      </div>
      <div><div className="flex items-center gap-3 mb-5"><Mail className="text-violet-300"/><div><h2 className="text-2xl font-bold">Send an inquiry</h2><p className="text-gray-400 text-sm mt-1">We will respond with the clearest next step.</p></div></div><ContactForm/></div>
    </div>
  </div></section></main>;
}
