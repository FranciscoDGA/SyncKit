'use client';

import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { siteConfig } from '@/lib/site';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: data.get('name'), email: data.get('email'), subject: data.get('subject'), message: data.get('message') }) });
      if (res.ok) { setStatus('sent'); form.reset(); } else { setStatus('error'); }
    } catch { setStatus('error'); }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Get in Touch</h1>
      <p className="mt-2 text-slate-500 dark:text-slate-400">Have a suggestion, partnership inquiry, or just want to say hello? Drop us a message.</p>
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {status === 'sent' ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center dark:border-emerald-800 dark:bg-emerald-950">
              <p className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">Message sent!</p>
              <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-500">We will get back to you within 48 business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div><label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input type="text" id="name" name="name" required className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white" /></div>
              <div><label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input type="email" id="email" name="email" required className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white" /></div>
              <div><label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                <input type="text" id="subject" name="subject" required className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white" /></div>
              <div><label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea id="message" name="message" required rows={5} className="mt-1.5 block w-full resize-none rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white" /></div>
              {status === 'error' && <p className="text-sm text-red-600 dark:text-red-400">Something went wrong. Please try again.</p>}
              <button type="submit" disabled={status === 'sending'} className="w-full rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700 disabled:opacity-50">{status === 'sending' ? 'Sending...' : 'Send Message'}</button>
            </form>
          )}
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/50">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Direct Channels</h3>
          <div className="mt-4 space-y-3">
            <div><p className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">Email</p><p className="text-sm text-slate-700 dark:text-slate-300">{siteConfig.email}</p></div>
            <div><p className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">Twitter</p><p className="text-sm text-slate-700 dark:text-slate-300">{siteConfig.social.twitter}</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
