const nextConfig = {
  async headers() {
    return [
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "img-src 'self' data: https://lbannualreports.lk; default-src 'none'",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
         
          {
            key: 'Content-Security-Policy',
            value:
              "script-src 'self' 'strict-dynamic'; style-src 'self'; object-src 'none'",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none';",
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
  images: {
    domains: ['lbannualreports.lk'],
    dangerouslyAllowSVG: false,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lbannualreports.lk',
        pathname: '/_next/static/media/**',
      },
    ],
  },
  reactStrictMode: false,
  env: {
    SPEECH_KEY: 'e9c22c571fff436eb7f4cc2810ce6e11',
    SPEECH_REGION: 'southeastasia',
    API_USERNAME: 'indika',
    API_PASSWORD: '7FJkN8Y_D',
    BASE_URL: 'https://lbannualreports.lk',
    BASE_URL_GRAPH: 'https://lbannualreports.lk',
  },
  compress: false,
};


export default nextConfig;
