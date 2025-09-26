import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Post } from '@/types/post';

// Direktori tempat file markdown disimpan
const postsDirectory = path.join(process.cwd(), 'posts');

/**
 * Mengambil semua posts dan mengurutkannya berdasarkan tanggal (terbaru dulu)
 */
export async function getAllPosts(): Promise<Post[]> {
  try {
    // Pastikan direktori posts ada
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = await Promise.all(
      fileNames
        .filter((name) => name.endsWith('.md'))
        .map(async (fileName) => {
          // Hilangkan ".md" dari file name untuk mendapatkan slug
          const slug = fileName.replace(/\.md$/, '');

          // Baca file markdown
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');

          // Parse metadata dan content dengan gray-matter
          const matterResult = matter(fileContents);

          // Proses markdown menjadi HTML
          const processedContent = await remark()
            .use(html)
            .process(matterResult.content);
          const contentHtml = processedContent.toString();

          return {
            slug,
            contentHtml,
            title: matterResult.data.title || 'Untitled',
            date: matterResult.data.date || new Date().toISOString(),
            excerpt: matterResult.data.excerpt || '',
            tags: matterResult.data.tags || [],
            thumbnail: matterResult.data.thumbnail || '',
            ...matterResult.data,
          } as Post;
        })
    );

    // Urutkan posts berdasarkan tanggal
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}

/**
 * Mengambil post berdasarkan slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Proses markdown menjadi HTML dengan syntax highlighting
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug: realSlug,
      contentHtml,
      title: matterResult.data.title || 'Untitled',
      date: matterResult.data.date || new Date().toISOString(),
      excerpt: matterResult.data.excerpt || '',
      tags: matterResult.data.tags || [],
      thumbnail: matterResult.data.thumbnail || '',
      ...matterResult.data,
    } as Post;
  } catch (error) {
    console.error('Error getting post by slug:', error);
    return null;
  }
}

/**
 * Mengambil semua tags yang unik dari semua posts
 */
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tagsSet = new Set<string>();
  
  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => tagsSet.add(tag));
    }
  });

  return Array.from(tagsSet).sort();
}