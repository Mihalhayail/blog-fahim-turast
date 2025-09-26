import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Layout from "@/components/Layout";
import { Post } from "@/types/post";
import Hero from "../images/alim-turast.png";

const Header: React.FC = () => {
  return (
    <header className="text-gray-100">
      <div className="container mx-auto px-4 lg:max-w-7xl py-24 text-center md:text-left">
        <div className="relative py-6 md:py-0">
          <Image
            className="origin-bottom-right right-0 -bottom-96 static md:absolute w-full md:w-96 lg:w-2/5"
            src={Hero}
            alt="Fahim Turast"
          />
        </div>

        <div className="w-full mx-20 md:w-1/2 ">
          <h1 className="text-5xl font-extrabold text-primary dark:text-white mb-6">
            Fahim Turast
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Fahim Turast adalah platform pendidikan yang fokus pada{" "}
            <i>ulumul arabiah</i> dan <i>ulumul aqliyah</i>.
          </p>

          <div className="mt-5 flex flex-row gap-3 justify-center md:justify-start">
            <Link
              href="https://home.fahimturast.com/"
              target="_blank"
              className="px-3 py-2 bg-primary hover:bg-primary/80 rounded-lg active:bg-primary/90  "
            >
              Mulai Belajar
            </Link>
            <Link
              href="#blog"
              className="px-3 py-2 text-primary bg-primary/10 border border-primary/50 hover:bg-primary hover:text-white rounded-lg active:bg-primary dark:text-white"
            >
              Baca Artikel
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <Layout>
      {/* Hero Section pakai Header */}
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-primary dark:text-white mb-6">
            FahimTurast
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Platform pendidikan yang unggul dan terkemuka dalam membekali thalib
            dengan penguasaan 'ulumul 'arabiah dan 'aqliyah secara mendalam.
          </p>
        </div>

        {/* Posts Grid */}
        <div
          id="blog"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
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
  title: "FahimTurast - Blog Pribadi",
  description:
    "Blog pribadi FahimTurast - Berbagi pemikiran, tutorial, dan pengalaman dalam dunia teknologi",
  openGraph: {
    title: "FahimTurast - Blog Pribadi",
    description:
      "Berbagi pemikiran, tutorial, dan pengalaman dalam dunia teknologi",
    type: "website",
  },
};
