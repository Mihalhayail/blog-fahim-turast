import Layout from "@/components/Layout";
import { Metadata } from "next";
import {
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Code,
  Book,
  BookOpenCheck,
  NotebookPen,
  FileQuestionMark,
} from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white mb-6">
            Blog FahimTurast
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Blog FahimTurast adalah platform untuk berbagi pengetahuan melalui
            tulisan yang mempermudah thalibul 'ilmi untuk mendapatkan berbagai
            tulisan menarik mengenai ilmu lughah 'arabiyah dan 'aqliyah'
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <BookOpenCheck className="w-6 h-6 mr-3 text-primary dark:text-blue-400" />
              Mengenal Fahim Blog
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fahim Turast adalah platform pendidikan yang berfokus pada ulumul
              'arabiah dan 'aqliyah. Dengan misi menghadirkan pembelajaran yang
              kredibel dan berkualitas, Fahim Turast dirancang untuk membantu
              thalib memahami ilmu alat secara mendalam dan aplikatif.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Blog ini menjadi wadah bagi thalibul 'ilmi untuk mengeksplorasi
              tulisan-tulisan menarik dan menghadirkan berbagai perspektif baru
              dalam dunia keilmuan islam, terutama dalam memahami kitab-kitab
              turast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <FileQuestionMark className="w-5 h-5 mr-3 text-primary dark:text-green-400" />
                Untuk Apa Fahim Blog?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Blog ini adalah salah satu program fahim turast untuk
                menyebarkan luaskan keilmuan islam melalui tulisan-artikel, dan
                meningkatkan literasi thalibul 'ilmi.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <NotebookPen className="w-5 h-5 mr-3 text-primary dark:text-orange-400" />
                Catatan Blog
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>📚 Daurah/Talaqqi Ilmu Alat Berseri</li>
                <li>📍 Offline dan Online (E-Course)senggang</li>
                <li>📝 Bertahap, Sistematis dan Mendalam.</li>
                <li>✅ Cocok untuk semua kalangan</li>
              </ul>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Lughah Arabiyah & Aqliyah
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Lughah Arabiyah
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Nahwu",
                    "Sharf",
                    "Bayan",
                    "Ma'ani",
                    "Badi'",
                    "Balaghah",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Aqliyah
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Adab al-Baḥth wa al-Munāẓarah", "Mantiq", "Maqulat"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Lain-lain
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Motivasi", "Inspirasi", "Cerita", "Panduan", "Hikmah"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Mari Terhubung!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Punya pertanyaan, feedback, atau ingin kolaborasi? Jangan ragu
              untuk menghubungi kami!
            </p>

            <div className="flex justify-center space-x-6">
              <a
                href="https://instagram.com/fahimturast"
                className="flex items-center px-4 py-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 dark:bg-gray-700 text-white rounded-lg hover:bg-gradient-to-l hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 dark:hover:bg-gray-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </a>

              <a
                href="https://youtube.com/@fahimturast?si=8xs13NKLMfdlMkZg"
                className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Youtube
              </a>

              <a
                href="mailto:hello@fahimturast@gmail.com"
                className="flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-800 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const metadata: Metadata = {
  title: "Tentang - FahimTurast",
  description:
    "Mengenal lebih dekat FahimTurast - developer yang passionate dalam berbagi pengetahuan teknologi",
  openGraph: {
    title: "Tentang - FahimTurast",
    description:
      "Mengenal lebih dekat FahimTurast - developer yang passionate dalam berbagi pengetahuan teknologi",
  },
};
