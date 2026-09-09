import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  authorRole: string;
  image: string;
  readTime: string;
  tldr?: string;
  lastUpdated?: string;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, '');
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const stats = readingTime(content);
    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date || new Date().toISOString(),
      category: data.category || 'General',
      author: data.author || 'SyncKit',
      authorRole: data.authorRole || 'Editor at SyncKit',
      image: data.image || '',
      readTime: stats.text,
      tldr: data.tldr || '',
      lastUpdated: data.lastUpdated || '',
      content,
    } as PostMeta;
  });
  return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const filePathMd = path.join(postsDirectory, `${slug}.md`);
  let resolvedPath = '';
  if (fs.existsSync(filePath)) {
    resolvedPath = filePath;
  } else if (fs.existsSync(filePathMd)) {
    resolvedPath = filePathMd;
  } else {
    return null;
  }
  const fileContent = fs.readFileSync(resolvedPath, 'utf-8');
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);
  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    date: data.date || new Date().toISOString(),
    category: data.category || 'General',
    author: data.author || 'SyncKit',
    authorRole: data.authorRole || 'Editor at SyncKit',
    image: data.image || '',
    readTime: stats.text,
    tldr: data.tldr || '',
    lastUpdated: data.lastUpdated || '',
    content,
  };
}

export function getCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((p) => p.category));
  return Array.from(categories).sort();
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md') || f.endsWith('.mdx')).map((f) => f.replace(/\.mdx?$/, ''));
}
