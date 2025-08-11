import Navigation from '@/components/navigation';
import { Locale } from '@/i18n-config';
import { getFontClass } from '@/utility/langClassName';
import { NextUIProvider } from '@nextui-org/react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import '../globals.css';

const Chat = dynamic(() => import('@/components/chat'), {
  ssr: false,
});

const Footer = dynamic(() => import('@/components/footer'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'LB Finance | Loans, Leasing & Savings in Sri Lanka',
  description:
    'LB Finance PLC offers Leasing, Loans, Savings, and Fixed Deposits in Sri Lanka. Apply online for quick approvals and low interest rates.',
  metadataBase: new URL('https://lb-financial-web.vercel.app/'),
  openGraph: {
    title: 'LB Finance | Loans, Leasing & Savings in Sri Lanka',
    description:
      'LB Finance PLC offers Leasing, Loans, Savings, and Fixed Deposits in Sri Lanka. Apply online for quick approvals and low interest rates.',
    url: 'https://lb-financial-web.vercel.app/',
    images: [
      {
        url: '/images/og.jpg',
        width: 800,
        height: 600,
        alt: 'LB Finance Open Graph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://lb-financial-web.vercel.app/',
    title: 'LB Finance | Loans, Leasing & Savings in Sri Lanka',
    description:
      'LB Finance PLC offers Leasing, Loans, Savings, and Fixed Deposits in Sri Lanka. Apply online for quick approvals and low interest rates.',
    images: [
      {
        url: '/images/og.jpg',
        width: 800,
        height: 600,
        alt: 'LB Finance Open Graph Image',
      },
    ],
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`text-white ${getFontClass(params.lang)}`}>
        <NextUIProvider>
          <div className="filter-layout font-primary bg-themeGreen text-white">
            <Navigation lang={params.lang} />
            {children}
            <Footer lang={params.lang} />
          </div>
          <div className="container relative">
            <Chat />
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
