import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: "Habibi Ramadhan | AI Engineer & Backend Developer",
    template: "%s | Habibi Ramadhan"
  },
  description: "AI Engineer and Backend Developer specializing in Generative AI, RAG Systems, and scalable backend solutions. Experienced in AI Vision, Multi-Agent Systems, and innovative software development.",
  keywords: [
    "AI Engineer",
    "Backend Developer",
    "Generative AI",
    "RAG Systems",
    "AI Vision",
    "Multi-Agent Systems",
    "Software Development",
    "Habibi Ramadhan"
  ],
  authors: [{ name: "Habibi Ramadhan" }],
  creator: "Habibi Ramadhan",
  publisher: "Habibi Ramadhan",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Habibi Ramadhan Portfolio",
    title: "Habibi Ramadhan | AI Engineer & Backend Developer",
    description: "AI Engineer and Backend Developer specializing in Generative AI, RAG Systems, and scalable backend solutions.",
    images: [
      {
        url: "/og-image.jpg", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Habibi Ramadhan Portfolio",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Habibi Ramadhan | AI Engineer & Backend Developer',
    description: 'AI Engineer and Backend Developer specializing in Generative AI, RAG Systems, and scalable backend solutions.',
    images: ['/og-image.jpg'], // Add your Twitter card image
    creator: '@your-twitter-handle',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
    // other verification codes if needed
  },
  alternates: {
    canonical: 'https://your-domain.com',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/site.webmanifest',
  other: {
    'theme-color': '#0B1121',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}