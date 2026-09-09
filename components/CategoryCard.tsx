import Link from 'next/link';

interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  count: number;
}

const categoryIcons: Record<string, string> = {
  productivity: '⚡',
  automations: '🔄',
  'saas-tools': '🛠️',
  'no-code': '🧩',
};

export default function CategoryCard({ name, slug, description, count }: CategoryCardProps) {
  return (
    <Link href={`/blog?category=${slug}`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-primary-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-primary-800">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-lg dark:bg-primary-900/30">{categoryIcons[slug] || '📁'}</div>
      <h3 className="mt-4 text-base font-semibold text-slate-900 group-hover:text-primary-600 dark:text-white">{name}</h3>
      <p className="mt-1 flex-1 text-sm text-slate-500 dark:text-slate-400">{description}</p>
      <span className="mt-3 text-xs font-medium text-slate-400 dark:text-slate-500">{count} article{count !== 1 ? 's' : ''}</span>
    </Link>
  );
}
