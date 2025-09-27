import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Calendar, Tag, Image as ImageIcon } from "lucide-react";
import { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-primary dark:hover:border-blue-600 transition-all duration-300 overflow-hidden">
      <Link href={`/posts/${post.slug}`}>
        {/* Thumbnail */}
        <div className="relative h-48 bg-gray-100 dark:bg-gray-700 overflow-hidden">
          {post.thumbnail ? (
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/30">
              <ImageIcon className="w-12 h-12 text-gray-400 dark:text-gray-500" />
            </div>
          )}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6">
          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors leading-tight line-clamp-2">
            {post.title}
          </h2>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>
          )}

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1.5" />
              {format(new Date(post.date), "dd MMM yyyy", { locale: id })}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-1.5" />
                <span className="truncate">
                  {post.tags.slice(0, 2).join(", ")}
                  {post.tags.length > 2 && "..."}
                </span>
              </div>
            )}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400 rounded-md text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium">
                  +{post.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
