import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = { title: 'Privacy Policy', description: 'SyncKit privacy policy.' };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy' }]} />
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Last updated: September 9, 2025</p>
      <div className="prose prose-slate mt-8 max-w-none dark:prose-invert">
        <p>This Privacy Policy describes how SyncKit collects, uses, and protects information from users who visit our blog and services.</p>
        <h2>1. Information We Collect</h2>
        <p><strong>Information You Provide:</strong> Contact form data (name, email, subject, message).</p>
        <p><strong>Information Collected Automatically:</strong> IP address (anonymized), browser type, pages visited, traffic source.</p>
        <h2>2. Cookies</h2>
        <p>We use essential cookies, analytics cookies (Google Analytics), advertising cookies (Google AdSense), and preference cookies.</p>
        <h2>3. Google AdSense</h2>
        <p>SyncKit uses Google AdSense to display advertisements. Google uses cookies to serve ads based on prior visits. Manage preferences at <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</p>
        <h2>4. GDPR (European Visitors)</h2>
        <p>You have the right to access, rectify, erase, restrict processing, port, and object to processing of your personal data. Email us at hello@synckit.blog.</p>
        <h2>5. CCPA (California Residents)</h2>
        <p>You have the right to know what personal information we collect, request deletion, and opt out of the sale of personal information. We do not sell personal information.</p>
        <h2>6. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your data. No method of internet transmission is 100% secure.</p>
        <h2>7. Contact</h2>
        <p>Email: hello@synckit.blog</p>
      </div>
    </div>
  );
}
