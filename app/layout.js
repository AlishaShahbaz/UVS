/**
 * ROOT LAYOUT.
 *
 * Type choice is the site's signature and worth stating plainly:
 *   Inter Tight  — UI and headlines. Tight, neutral, holds at display size.
 *   Instrument Serif italic — exactly one phrase per headline. This is the
 *     memorable half of the design, and it only stays memorable because it is
 *     rationed to one use per heading.
 *   JetBrains Mono — eyebrows, figures, labels. The instrument register.
 *
 * All three load through next/font, so they are self-hosted, preloaded and
 * emit no third-party request. Fonts are the largest render-blocking asset on
 * most marketing sites; treating them as a performance decision rather than a
 * brand decision is the reason this one is fast.
 */

import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { company } from '@/content/company';
import './globals.css';

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-instrument',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} — support and AI engineering`,
    template: `%s | ${company.short}`,
  },
  description:
    'We build the systems — AI, software and campaigns — then staff the queues they create. Chat, voice, email, orders, sales and back office, to a service level you set.',
  applicationName: company.name,
  authors: [{ name: company.name }],
  openGraph: {
    type: 'website',
    siteName: company.name,
    locale: 'en_GB',
    url: company.url,
  },
  twitter: { card: 'summary_large_image' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: '/' },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfaf8' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0b0d' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen antialiased">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
