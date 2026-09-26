import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0b192c',
};

export const metadata: Metadata = {
  title: 'Vidhyanagari Campus | Admissions 2026-27 | Himmatnagar, Gujarat',
  description:
    'Vidhyanagari Campus, managed by Vishwa Mangalam Education Trust (Est. 1982 by Dr. D. L. Patel), offers premier undergraduate, postgraduate, nursing, education, and technical programs in Himmatnagar, North Gujarat.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  keywords: [
    'Vidhyanagari',
    'Vidhyanagari Campus',
    'Himmatnagar colleges',
    'MBA Himmatnagar',
    'MCA Gujarat',
    'Nursing college Sabarkantha',
    'BCA BBA Himmatnagar',
    'Vishwa Mangalam Education Trust',
    'Hathmati River Campus',
    'Admissions 2026',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
