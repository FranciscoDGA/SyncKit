import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ['productivity', 'automation', 'no-code', 'SaaS', 'workflow tools'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: { type: 'website', locale: 'en_US', url: siteConfig.url, siteName: siteConfig.name, title: siteConfig.title, description: siteConfig.description },
  twitter: { card: 'summary_large_image', title: siteConfig.title, description: siteConfig.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
