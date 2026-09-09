import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = { title: 'Terms of Service', description: 'SyncKit terms of service.' };

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: 'Terms of Service', href: '/terms' }]} />
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Terms of Service</h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Last updated: September 9, 2025</p>
      <div className="prose prose-slate mt-8 max-w-none dark:prose-invert">
        <p>By accessing and using SyncKit, you agree to these Terms of Service.</p>
        <h2>1. Use of the Site</h2>
        <p>SyncKit is an informational blog. Content is provided for educational purposes. You must not reproduce, distribute, or modify content without proper attribution.</p>
        <h2>2. Intellectual Property</h2>
        <p>All original content is protected by copyright. You may share short excerpts with a link and attribution.</p>
        <h2>3. Affiliate Links</h2>
        <p>Some articles contain affiliate links. We may earn a commission at no extra cost to you. Recommendations are based on independent evaluation.</p>
        <h2>4. Disclaimer</h2>
        <p>The Site is provided &quot;as is.&quot; We do not guarantee uninterrupted availability or complete accuracy of information.</p>
        <h2>5. Limitation of Liability</h2>
        <p>In no event shall SyncKit be liable for any damages arising from the use of the Site or its content.</p>
        <h2>6. Contact</h2>
        <p>Email: hello@synckit.blog</p>
      </div>
    </div>
  );
}
