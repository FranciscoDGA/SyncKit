import { getAllPosts, getCategories } from '@/lib/blog';
import PostCard from '@/components/PostCard';
import SearchBar from '@/components/SearchBar';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'Articles on productivity, no-code automations, and SaaS tool reviews.',
};

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ category?: string; q?: string }> }) {
  const { category = '', q: query = '' } = await searchParams;
  let posts = getAllPosts();
  if (category) posts = posts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  if (query) { const q = query.toLowerCase(); posts = posts.filter((p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)); }
  const categories = getCategories();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Blog</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">Guides, reviews, and tutorials on digital productivity and SaaS tools.</p>
      </div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><SearchBar /></div>
      <div className="mb-8 flex flex-wrap gap-2">
        <Link href="/blog" className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${!category ? 'bg-primary-600 text-white' : 'border border-slate-200 bg-white text-slate-600 hover:border-primary-300 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400'}`}>All</Link>
        {categories.map((cat) => (
          <Link key={cat} href={`/blog?category=${encodeURIComponent(cat)}`}
            className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${category === cat ? 'bg-primary-600 text-white' : 'border border-slate-200 bg-white text-slate-600 hover:border-primary-300 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400'}`}>{cat}</Link>
        ))}
      </div>
      {posts.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-12 text-center dark:border-slate-800 dark:bg-slate-900"><p className="text-slate-500 dark:text-slate-400">No articles found.</p></div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{posts.map((post) => (<PostCard key={post.slug} post={post} />))}</div>
      )}
    </div>
  );
}
