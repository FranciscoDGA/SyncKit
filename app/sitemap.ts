import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`, lastModified: new Date(post.lastUpdated || post.date), changeFrequency: 'monthly' as const, priority: 0.8,
  }));
  return [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${siteConfig.url}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...postEntries,
    { url: `${siteConfig.url}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteConfig.url}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteConfig.url}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteConfig.url}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
