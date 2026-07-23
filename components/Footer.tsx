import Link from 'next/link';
import Brand from '@/components/Brand';

const groups = [
  { title: 'Explore', links: [['Services','/services'],['Industries','/industries'],['Process','/process'],['About','/about']] },
  { title: 'Bevox', links: [['Business Evolution X','/business-evolution'],['Locations','/locations'],['Contact','/contact'],['Book a call','https://cal.com/bevox/30min']] },
  { title: 'Legal', links: [['Privacy','/privacy'],['Terms','/terms']] },
];

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand />
          <p className="footer-intro">We design and build the systems behind business evolution — digital, operational, AI-powered, and connected.</p>
          <p className="footer-markets">USA · Serbia · Austria · Germany · Hungary · Bulgaria · Malta</p>
        </div>
        {groups.map(group => (
          <div key={group.title} className="footer-group">
            <strong>{group.title}</strong>
            {group.links.map(([label,href]) => href.startsWith('http')
              ? <a key={label} href={href} target="_blank" rel="noreferrer">{label}</a>
              : <Link key={label} href={href}>{label}</Link>)}
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Bevox. Business Evolution X.</span>
        <span>Built in Europe. Working across borders.</span>
      </div>
    </footer>
  );
}
