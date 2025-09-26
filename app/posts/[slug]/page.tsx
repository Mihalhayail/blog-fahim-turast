import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Image as ImageIcon } from 'lucide-react';
import { Metadata } from 'next';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Home
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          {/* Thumbnail */}
          {post.thumbnail && (
            <div className="relative h-64 md:h-80 mb-8 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {format(new Date(post.date), 'dd MMMM yyyy', { locale: id })}
            </div>
            
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {post.excerpt && (
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Article Content */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none
                     prose-headings:text-gray-900 dark:prose-headings:text-white
                     prose-p:text-gray-700 dark:prose-p:text-gray-300
                     prose-a:text-blue-600 dark:prose-a:text-blue-400
                     prose-strong:text-gray-900 dark:prose-strong:text-white
                     prose-code:text-red-600 dark:prose-code:text-red-400
                     prose-pre:bg-gray-50 dark:prose-pre:bg-gray-800
                     prose-blockquote:border-blue-500 dark:prose-blockquote:border-blue-400"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Lihat Artikel Lainnya
            </Link>
          </div>
        </footer>
      </article>
    </Layout>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Artikel Tidak Ditemukan',
    };
  }

  return {
    title: `${post.title} - FahimTurast`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}