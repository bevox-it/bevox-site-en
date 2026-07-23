'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Brand from '@/components/Brand';

const links = [
  ['Services', '/services'],
  ['Industries', '/industries'],
  ['Process', '/process'],
  ['Evolution', '/business-evolution'],
  ['Locations', '/locations'],
  ['About', '/about'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <nav className="container nav-glass nav-shell" aria-label="Main navigation">
        <Brand />
        <div className="desktop-nav">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className={pathname === href ? 'active' : ''}>
              {label}
            </Link>
          ))}
        </div>
        <a className="btn-primary nav-cta" href="https://cal.com/bevox/30min" target="_blank" rel="noreferrer">
          Book a strategy call
        </a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
        {open && (
          <div className="mobile-nav">
            {links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
            <Link href="/contact">Contact</Link>
            <a href="https://cal.com/bevox/30min" target="_blank" rel="noreferrer">Book a strategy call</a>
          </div>
        )}
      </nav>
    </header>
  );
}
