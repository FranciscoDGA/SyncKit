import Link from 'next/link';
import { PostMeta } from '@/lib/blog';

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="relative aspect-[16/9] bg-slate-100 dark:bg-slate-800">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
          <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center rounded-full bg-primary-50 px-2 py-0.5 font-medium text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">{post.category}</span>
          <span className="text-slate-300 dark:text-slate-600">&middot;</span>
          <span>{post.readTime}</span>
        </div>
        <Link href={`/blog/${post.slug}`} className="mt-3">
          <h3 className="text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-primary-600 dark:text-white">{post.title}</h3>
        </Link>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2">{post.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-400 dark:text-slate-500">{formatDate(post.date)}</span>
          <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400">Read more &rarr;</Link>
        </div>
      </div>
    </article>
  );
}
