import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FahimTurast - Blog Pribadi',
  description: 'Blog pribadi FahimTurast - Berbagi pemikiran, tutorial, dan pengalaman dalam dunia teknologi dan pengembangan perangkat lunak',
  keywords: ['blog', 'teknologi', 'programming', 'web development', 'tutorial', 'FahimTurast'],
  authors: [{ name: 'FahimTurast' }],
  creator: 'FahimTurast',
  publisher: 'FahimTurast',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://blog.fahimturast.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FahimTurast - Blog Pribadi',
    description: 'Berbagi pemikiran, tutorial, dan pengalaman dalam dunia teknologi',
    url: 'https://blog.fahimturast.com',
    siteName: 'FahimTurast Blog',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FahimTurast - Blog Pribadi',
    description: 'Berbagi pemikiran, tutorial, dan pengalaman dalam dunia teknologi',
    creator: '@fahimturast',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}