import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog - FahimTurast",
  description:
    "Blog FahimTurast - platform pendidikan yang fokus pada ulumul 'arabiah dan 'aqliyah",
  keywords: [
    "blog",
    "turast",
    "ilmu alat",
    "blog fahimturast",
    "FahimTurast",
    "ilmu lughah",
    "ilmu berjenjang",
  ],
  authors: [{ name: "FahimTurast" }],
  creator: "FahimTurast",
  publisher: "FahimTurast",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://blog.fahimturast.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Blog - FahimTurast",
    description:
      "Blog FahimTurast - platform pendidikan yang fokus pada ulumul 'arabiah dan 'aqliyah",
    url: "https://blog.fahimturast.com",
    siteName: "FahimTurast Blog",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - FahimTurast",
    description:
      "Blog FahimTurast - platform pendidikan yang fokus pada ulumul 'arabiah dan 'aqliyah",
    creator: "@fahimturast",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
      <head>
        {/* ...existing meta tags... */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
