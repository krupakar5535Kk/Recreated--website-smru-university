import type { Metadata } from 'next';
import { Outfit, Inter, Cinzel } from 'next/font/google';
import './globals.css';
import LayoutWrapper from '@/components/LayoutWrapper';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://smru.edu.in'),
  title: "St. Mary's University Hyderabad (SMRU) – Official Site",
  description: "St. Mary's University (SMRU), legally St. Mary's Rehabilitation University, is a UGC-recognised private university in Hyderabad offering 70+ programmes.",
  keywords: [
    "St. Mary's University",
    "SMRU",
    "St. Mary's Rehabilitation University",
    "University in Hyderabad",
    "Allied Health Sciences",
    "Rehabilitation Sciences",
    "BASLP",
    "BPT",
    "Law",
    "Engineering"
  ],
  authors: [{ name: "St. Mary's University" }],
  robots: "index, follow",
  alternates: {
    canonical: 'https://smru.edu.in/',
  },
  openGraph: {
    title: "St. Mary's University Hyderabad (SMRU) – Official Site",
    description: "St. Mary's University (SMRU), legally St. Mary's Rehabilitation University, is a UGC-recognised private university in Hyderabad offering 70+ programmes.",
    url: 'https://smru.edu.in/',
    siteName: "St. Mary's University",
    images: [
      {
        url: '/assets/og-default.jpg',
        width: 1200,
        height: 630,
        alt: "St. Mary's University Campus",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "St. Mary's University Hyderabad (SMRU) – Official Site",
    description: "St. Mary's University (SMRU), legally St. Mary's Rehabilitation University, is a UGC-recognised private university in Hyderabad offering 70+ programmes.",
    images: ['/assets/og-default.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

const universitySchema = {
  '@context': 'https://schema.org',
  '@type': 'CollegeOrUniversity',
  '@id': 'https://smru.edu.in/#organization',
  name: "St. Mary's University",
  legalName: "St. Mary's Rehabilitation University",
  alternateName: [
    'SMRU',
    'SMRU Hyderabad',
    "St. Mary's Rehabilitation University",
    "St.Mary's University",
    'St Marys University Hyderabad',
  ],
  url: 'https://smru.edu.in/',
  logo: {
    '@type': 'ImageObject',
    url: 'https://smru.edu.in/assets/Logo.webp',
  },
  description: "St. Mary's University (SMRU) is the public name of St. Mary's Rehabilitation University, a UGC-recognised private university in Hyderabad, Telangana, established under Telangana Ordinance No. 2 of 2025 and Telangana Act No. 10 of 2026.",
  foundingDate: '2025-07-24',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Joseph Sriharsha & Mary Indraja Educational Society',
  },
  telephone: '+91-9010455591',
  email: 'reach@smru.edu.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Near Ramoji Film City, Deshmukhi Village, Pochampally Mandal',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '508284',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '17.3484',
    longitude: '78.6824',
  },
  sameAs: [
    'https://www.facebook.com/SMRUniversity',
    'https://www.instagram.com/smruhyderabad',
    'https://www.linkedin.com/company/smruhyderabad/',
    'https://www.youtube.com/@SMRUniversity',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://smru.edu.in/#website',
  name: "St. Mary's University",
  url: 'https://smru.edu.in/',
  publisher: {
    '@id': 'https://smru.edu.in/#organization',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${cinzel.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(universitySchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased bg-white text-slate-900 font-sans">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
