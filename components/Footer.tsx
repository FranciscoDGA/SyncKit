import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary-600 text-xs font-bold text-white">S</span>
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500 dark:text-slate-400">{siteConfig.description}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Navigate</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/blog" className="text-sm text-slate-500 hover:text-primary-600 dark:text-slate-400">Blog</Link></li>
              <li><Link href="/about" className="text-sm text-slate-500 hover:text-primary-600 dark:text-slate-400">About</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-500 hover:text-primary-600 dark:text-slate-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Legal</h3>
            <ul className="mt-3 space-y-2">
              <li><Link href="/privacy" className="text-sm text-slate-500 hover:text-primary-600 dark:text-slate-400">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-slate-500 hover:text-primary-600 dark:text-slate-400">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row dark:border-slate-800">
          <p className="text-xs text-slate-400 dark:text-slate-500">&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="text-xs text-slate-400 dark:text-slate-500">Built with care for the digital productivity community.</p>
        </div>
      </div>
    </footer>
  );
}
