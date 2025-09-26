import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Layout from '@/components/Layout';
import { Post } from '@/types/post';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            FahimTurast
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Berbagi pemikiran, tutorial, dan pengalaman dalam dunia teknologi dan pengembangan perangkat lunak
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: Post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Belum ada artikel yang dipublikasikan
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}

export const metadata = {
  title: 'FahimTurast - Blog Pribadi',
  description: 'Blog pribadi FahimTurast - Berbagi pemikiran, tutorial, dan pengalaman dalam dunia teknologi',
  openGraph: {
    title: 'FahimTurast - Blog Pribadi',
    description: 'Berbagi pemikiran, tutorial, dan pengalaman dalam dunia teknologi',
    type: 'website',
  },
};