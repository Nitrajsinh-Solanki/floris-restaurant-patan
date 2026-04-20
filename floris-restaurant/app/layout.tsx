import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

import {
  Playfair_Display,
  Cormorant_Garamond,
  DM_Sans,
} from 'next/font/google';

/* ========================================
   GOOGLE FONTS (BEST METHOD FOR NEXT.JS)
======================================== */
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dmsans',
  display: 'swap',
});

/* ========================================
   SEO METADATA
======================================== */
export const metadata: Metadata = {
  title: 'Floris Restaurant & Banquet | Pure Veg | Patan, Gujarat',
  description:
    "Patan's Premium Pure Vegetarian Restaurant & Banquet Venue. Serving authentic flavors with dine-in, delivery, takeaway, and reservations. Located on Patan-Chanasma Highway.",
  keywords: [
    'Floris Restaurant',
    'Floris Banquet',
    'Pure Veg Restaurant Patan',
    'Best Restaurant Patan Gujarat',
    'Banquet Hall Patan',
    'Vegetarian Restaurant Gujarat',
    'Unlimited Lunch Patan',
    'Punjabi Thali Patan',
  ],
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Floris Restaurant & Banquet | Patan Gujarat',
    description:
      'Premium Pure Vegetarian Restaurant & Banquet Venue in Patan, Gujarat.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Floris Restaurant & Banquet',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Floris Restaurant & Banquet',
    description:
      'Premium Pure Vegetarian Restaurant & Banquet Venue in Patan.',
  },
};

/* ========================================
   ROOT LAYOUT
======================================== */
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* GEO TAGS */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Patan, Gujarat" />
        <meta name="geo.position" content="23.8497;72.1244" />

        {/* MOBILE */}
        <meta name="theme-color" content="#7D1A2B" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}