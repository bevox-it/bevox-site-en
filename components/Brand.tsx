import Link from 'next/link';

export function CubeMark({ className = '' }: { className?: string }) {
  return (
    <span className={`cube-mark ${className}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" role="img">
        <path d="M24 7 39 15.5v17L24 41 9 32.5v-17L24 7Z" />
        <path d="m9 15.5 15 8.6 15-8.6M24 24.1V41" />
      </svg>
    </span>
  );
}

export default function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="Bevox home">
      <CubeMark />
      {!compact && (
        <span className="brand-copy">
          <strong>BEVOX</strong>
          <small>Business Evolution X</small>
        </span>
      )}
    </Link>
  );
}
