import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  async redirects() {
    const pages = ['business-evolution','services','solutions','industries','work','process','process-map','roi-calculator','about','locations','contact','privacy','terms','thank-you'];
    return pages.flatMap(path => ([
      { source: `/${path}.html`, destination: `/${path}`, permanent: true },
      { source: `/${path}.htm`, destination: `/${path}`, permanent: true },
    ]));
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    }];
  },
};

export default nextConfig;
