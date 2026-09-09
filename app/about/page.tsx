import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about SyncKit: our mission, editorial process, and criteria for evaluating digital tools.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />
      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">About SyncKit</h1>
      <div className="prose prose-slate mt-8 max-w-none dark:prose-invert">
        <p><strong>SyncKit</strong> was built for professionals who are tired of sifting through noisy, outdated content to find tools that actually work. We focus on one thing: practical, tested advice on productivity, no-code automations, and SaaS tools.</p>
        <p>No fluff. No sponsored praise. Just honest reviews and step-by-step guides from people who use these tools daily.</p>
        <h2>Our Mission</h2>
        <p>Make high-quality digital productivity knowledge accessible to everyone. Whether you are a freelancer, team lead, or solo founder, you can build exceptional workflows without a massive budget or a full engineering team.</p>
        <h2>What We Cover</h2>
        <ul>
          <li><strong>Productivity:</strong> GTD, time blocking, second brain systems, and capture workflows that stick.</li>
          <li><strong>Automations:</strong> Complete flows with Zapier, Make, n8n, Power Automate, and AI-powered tools.</li>
          <li><strong>SaaS Tools:</strong> Honest reviews and head-to-head comparisons of the best software on the market.</li>
          <li><strong>No-Code:</strong> Build apps, websites, and full systems without writing a single line of code.</li>
        </ul>
        <h2>Our Editorial Process</h2>
        <p>Every article goes through a rigorous process before it hits the site:</p>
        <ol>
          <li><strong>Research:</strong> We dig into primary sources, official docs, and community feedback.</li>
          <li><strong>Hands-On Testing:</strong> We use every tool in real scenarios before writing about it.</li>
          <li><strong>Technical Review:</strong> We verify data, update screenshots, and validate all code and commands.</li>
          <li><strong>Editorial Review:</strong> We check clarity, tone, and alignment with E-E-A-T standards.</li>
          <li><strong>Publish &amp; Maintain:</strong> We update articles as tools evolve. No stale content allowed.</li>
        </ol>
        <h2>Transparency</h2>
        <p>Some links on SyncKit are affiliate links. When you click an affiliate link and make a purchase, we may earn a small commission at no extra cost to you. Our recommendations are always based on technical merit and real-world usefulness.</p>
        <h2>Our Team</h2>
        <p>Written by <strong>Alex Morgan</strong> — Automation consultant helping small teams optimize their daily workflows with no-code tools.</p>
      </div>
    </div>
  );
}
