const ASSETS_BASE_URL =
  process.env.NEXT_PUBLIC_ASSETS_SERVER_URL ||
  'https://kiwizu3.github.io/meridian-ar-data/public';

const assetRewrite = (folder) => ({
  source: `/${folder}/:path*`,
  destination: `${ASSETS_BASE_URL}/${folder}/:path*`,
});

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

    async rewrites() {
    return {
      beforeFiles: [
        assetRewrite('images'),
        assetRewrite('videos'),
        assetRewrite('gif'),
        assetRewrite('music'),
        assetRewrite('voice'),
        assetRewrite('voices'),
        assetRewrite('pdf'),
        assetRewrite('fonts'),
        {
          source: '/cursorSvg.svg',
          destination: `${ASSETS_BASE_URL}/cursorSvg.svg`,
        },
      ],
    };
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
