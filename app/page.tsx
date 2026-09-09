import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/site';
import PostCard from '@/components/PostCard';
import CategoryCard from '@/components/CategoryCard';
import SearchBar from '@/components/SearchBar';

export default function HomePage() {
  const posts = getAllPosts();
  const featured = posts.slice(0, 6);
  const categoryData = siteConfig.categories.map((cat) => ({
    ...cat,
    count: posts.filter((p) => p.category === cat.name).length,
  }));

  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">Productivity &middot; Automations &middot; SaaS</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Work smarter,<br />not harder.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-500 dark:text-slate-400">Practical guides, honest tool reviews, and no-code automations to help you build workflows that actually work.</p>
          <div className="mt-8 flex justify-center"><SearchBar /></div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Featured Articles</h2>
          <Link href="/blog" className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400">View all &rarr;</Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((post) => (<PostCard key={post.slug} post={post} />))}
        </div>
      </section>
      <section className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Browse by Category</h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">Find exactly what you need.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categoryData.map((cat) => (<CategoryCard key={cat.slug} {...cat} />))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl bg-primary-600 px-8 py-12 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-white">Stay ahead of the curve</h2>
          <p className="mt-2 text-primary-100">Get practical tips on productivity, automations, and SaaS tools delivered weekly.</p>
          <Link href="/blog" className="mt-6 inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm transition-colors hover:bg-primary-50">Explore the Blog</Link>
        </div>
      </section>
    </>
  );
}
