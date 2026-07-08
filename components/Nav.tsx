import Link from 'next/link';

const links = [
  ['Services', '/services'], ['Industries', '/industries'], ['Process', '/process'], ['About', '/about'], ['Contact', '/contact']
];
export default function Nav() {
  return <header className="fixed top-4 left-0 right-0 z-50">
    <nav className="container nav-glass rounded-2xl px-4 py-3 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3 font-bold tracking-tight"><span className="h-9 w-9 rounded-xl btn-primary grid place-items-center">B</span> Bevox</Link>
      <div className="hidden md:flex items-center gap-7 text-sm text-gray-300">{links.map(([label,href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}</div>
      <Link href="/contact" className="btn-primary rounded-xl px-4 py-2 text-sm font-semibold transition">Book a call</Link>
    </nav>
  </header>
}
