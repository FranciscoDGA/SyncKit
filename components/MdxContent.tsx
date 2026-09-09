'use client';

import { MDXRemote } from 'next-mdx-remote/rsc';

function Callout({ type = 'info', children }: { type?: 'info' | 'warning' | 'tip'; children: React.ReactNode }) {
  const styles = {
    info: 'border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950',
    warning: 'border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950',
    tip: 'border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950',
  };
  const labels = { info: 'Heads Up', warning: 'Watch Out', tip: 'Pro Tip' };
  return (
    <div className={`my-6 rounded-lg border-l-4 p-4 ${styles[type]}`}>
      <p className="mb-1 text-sm font-semibold text-slate-900 dark:text-white">{labels[type]}</p>
      <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{children}</div>
    </div>
  );
}

const components = { Callout };

export default function MdxContent({ source }: { source: string }) {
  return (
    <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-20 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline dark:prose-a:text-primary-400 prose-code:before:content-none prose-code:after:content-none prose-img:rounded-lg">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
