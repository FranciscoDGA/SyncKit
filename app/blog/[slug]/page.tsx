import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { siteConfig } from '@/lib/site';
import MdxContent from '@/components/MdxContent';
import Breadcrumbs from '@/components/Breadcrumbs';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title, description: post.description,
    openGraph: { title: post.title, description: post.description, url: `${siteConfig.url}/blog/${post.slug}`, type: 'article', publishedTime: post.date, authors: [post.author] },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.description,
    datePublished: post.date, dateModified: post.lastUpdated || post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    url: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.title, href: `/blog/${post.slug}` }]} />
        <header className="mt-6">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">{post.category}</span>
            <span>&middot;</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.lastUpdated && (<><span>&middot;</span><span>Updated {formatDate(post.lastUpdated)}</span></>)}
            <span>&middot;</span><span>{post.readTime}</span>
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{post.title}</h1>
          <p className="mt-3 text-lg text-slate-500 dark:text-slate-400">{post.description}</p>
          <div className="mt-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700 dark:bg-primary-900/50 dark:text-primary-400">{post.author.split(' ').map((n) => n[0]).join('')}</div>
            <div><p className="text-sm font-medium text-slate-900 dark:text-white">{post.author}</p><p className="text-xs text-slate-500 dark:text-slate-400">{post.authorRole}</p></div>
          </div>
        </header>
        <AffiliateDisclosure />
        {post.tldr && (
          <div className="mb-8 rounded-xl border border-primary-200 bg-primary-50 p-5 dark:border-primary-800 dark:bg-primary-950">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary-700 dark:text-primary-400">TL;DR</p>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{post.tldr}</p>
          </div>
        )}
        <div className="mt-8"><MdxContent source={post.content} /></div>
        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/50">
          <p className="text-sm font-medium text-slate-900 dark:text-white">Found this helpful?</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Share it with your network and help other professionals work smarter.</p>
        </div>
      </article>
    </>
  );
}
