'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { siteConfig } from '@/lib/site';

const navLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900 dark:text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">S</span>
          {siteConfig.name}
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${pathname === link.href ? 'bg-slate-100 text-primary-600 dark:bg-slate-800 dark:text-primary-400' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'}`}>
              {link.label}
            </Link>
          ))}
          <Link href="/blog" className="ml-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700">Read Articles</Link>
        </nav>
        <button type="button" onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-100 md:hidden dark:text-slate-400 dark:hover:bg-slate-800" aria-label="Menu">
          {mobileOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 md:hidden dark:border-slate-800 dark:bg-slate-900">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}
              className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${pathname === link.href ? 'bg-slate-100 text-primary-600 dark:bg-slate-800 dark:text-primary-400' : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'}`}>
              {link.label}
            </Link>
          ))}
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="mt-2 block rounded-lg bg-primary-600 px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700">Read Articles</Link>
        </div>
      )}
    </header>
  );
}
