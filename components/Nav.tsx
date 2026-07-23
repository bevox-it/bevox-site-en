'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Brand from '@/components/Brand';

const links = [
  ['Services', '/services'],
  ['Solutions', '/solutions'],
  ['Industries', '/industries'],
  ['Work', '/work'],
  ['Evolution Hub', '/evolution-hub'],
  ['Process', '/process'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav ref={navRef} className="container nav-glass nav-shell" aria-label="Main navigation">
        <Brand />
        <div className="desktop-nav">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className={pathname === href || pathname.startsWith(`${href}/`) ? 'active' : ''}>
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
