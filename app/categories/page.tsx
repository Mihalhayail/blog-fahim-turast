import Layout from "@/components/Layout";
import { getAllTags, getAllPosts } from "@/lib/posts";
import Link from "next/link";
import { Tag, Hash } from "lucide-react";
import { Metadata } from "next";

export default async function Categories() {
  const [tags, posts] = await Promise.all([getAllTags(), getAllPosts()]);

  // Hitung jumlah post untuk setiap tag
  const tagCounts = tags.reduce((acc, tag) => {
    acc[tag] = posts.filter((post) => post.tags?.includes(tag)).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
            Kategori & Tag
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Jelajahi artikel berdasarkan topik dan kategori yang kamu minati
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {posts.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Total Artikel
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {tags.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Total Tag</div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              {new Date().getFullYear()}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Tahun Aktif</div>
          </div>
        </div>

        {/* Tags Cloud */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Tag className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            Semua Tag
          </h2>

          {tags.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => {
                const count = tagCounts[tag];
                const sizeClass =
                  count > 3 ? "text-lg" : count > 1 ? "text-base" : "text-sm";

                return (
                  <Link
                    key={tag}
                    href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-800/30 dark:hover:to-indigo-800/30 text-blue-700 dark:text-blue-300 rounded-lg transition-all transform hover:scale-105 ${sizeClass} font-medium`}
                  >
                    <Hash className="w-4 h-4 mr-2" />
                    {tag}
                    <span className="ml-2 px-2 py-0.5 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full text-xs font-bold">
                      {count}
                    </span>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 dark:text-gray-400">
                Belum ada tag yang tersedia
              </p>
            </div>
          )}
        </div>

        {/* Popular Categories */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Kategori Populer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tags.slice(0, 6).map((tag) => (
              <Link
                key={tag}
                href={`/tags/${encodeURIComponent(tag.toLowerCase())}`}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tag}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">
                      {tagCounts[tag]} artikel
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-800/50 transition-colors">
                    <Tag className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Kategori & Tag - FahimTurast",
  description:
    "Jelajahi artikel berdasarkan kategori dan tag. Temukan topik yang menarik minat Anda.",
  openGraph: {
    title: "Kategori & Tag - FahimTurast",
    description:
      "Jelajahi artikel berdasarkan kategori dan tag. Temukan topik yang menarik minat Anda.",
  },
};
