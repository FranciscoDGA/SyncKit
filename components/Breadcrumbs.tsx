import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500 dark:text-slate-400">
      <ol className="flex flex-wrap items-center gap-1" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400" itemProp="item">
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span className="text-slate-300 dark:text-slate-600">/</span>
            {index === items.length - 1 ? (
              <span className="text-slate-900 font-medium dark:text-white" itemProp="name">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-primary-600 dark:hover:text-primary-400" itemProp="item">
                <span itemProp="name">{item.label}</span>
              </Link>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
