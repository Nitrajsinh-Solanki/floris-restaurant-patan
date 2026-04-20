import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Floris Restaurant & Banquet | Pure Veg | Patan, Gujarat',
  description: 'Patan\'s Premium Pure Vegetarian Restaurant & Banquet Venue. Serving authentic flavors with dine-in, delivery, and takeaway. Banquet hall for all celebrations. Located on Patan-Chanasma Highway.',
  keywords: 'pure veg restaurant Patan, vegetarian restaurant Gujarat, banquet hall Patan, Floris restaurant, restaurant near circuit house Patan, veg food Patan Gujarat, thali Patan',
  openGraph: {
    title: 'Floris Restaurant & Banquet | Patan Gujarat',
    description: 'Pure Vegetarian Restaurant & Premium Banquet Venue in Patan, Gujarat. Thalis from ₹190 | Unlimited meals ₹349.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Patan, Gujarat" />
        <meta name="geo.position" content="23.8497;72.1244" />
      </head>
      <body>{children}</body>
    </html>
  );
}