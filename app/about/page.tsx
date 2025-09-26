import Layout from '@/components/Layout';
import { Metadata } from 'next';
import { Github, Twitter, Linkedin, Mail, Code, Book, Coffee } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tentang FahimTurast
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Halo! Saya adalah seorang developer yang passionate dalam berbagi pengetahuan 
            dan pengalaman melalui tulisan.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Code className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
              Perjalanan Coding Saya
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Perjalanan saya di dunia pemrograman dimulai dari rasa penasaran yang besar terhadap 
              bagaimana sebuah website atau aplikasi bisa bekerja. Dari HTML sederhana hingga 
              framework modern, setiap langkah adalah pembelajaran yang berharga.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Saat ini saya fokus pada pengembangan web modern dengan teknologi seperti React, 
              Next.js, TypeScript, dan ekosistem JavaScript yang luas. Tapi passion saya tidak 
              berhenti di frontend saja - saya juga tertarik dengan backend development, 
              cloud computing, dan architecture design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Book className="w-5 h-5 mr-3 text-green-600 dark:text-green-400" />
                Kenapa Saya Ngeblog?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Blog ini adalah cara saya untuk berbagi pengetahuan, mendokumentasikan 
                pembelajaran, dan hopefully membantu developer lain dalam journey mereka. 
                Saya percaya bahwa berbagi knowledge adalah salah satu cara terbaik untuk 
                terus belajar dan berkembang.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Coffee className="w-5 h-5 mr-3 text-orange-600 dark:text-orange-400" />
                Fun Facts
              </h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>☕ Coffee enthusiast (tapi bisa juga teh)</li>
                <li>🎮 Gamer di waktu senggang</li>
                <li>📚 Suka baca tech blog dan documentation</li>
                <li>🎵 Coding sambil dengerin musik</li>
              </ul>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Tech Stack & Tools
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Backend & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'PostgreSQL', 'Git', 'Docker', 'Vercel'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Currently Learning</h4>
                <div className="flex flex-wrap gap-2">
                  {['Rust', 'Go', 'AWS', 'Kubernetes', 'GraphQL'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
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
              Punya pertanyaan, feedback, atau ingin kolaborasi? Jangan ragu untuk menghubungi saya!
            </p>
            
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/fahimturast"
                className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
              
              <a 
                href="https://twitter.com/fahimturast"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5 mr-2" />
                Twitter
              </a>
              
              <a 
                href="mailto:hello@fahimturast.com"
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
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
  title: 'Tentang - FahimTurast',
  description: 'Mengenal lebih dekat FahimTurast - developer yang passionate dalam berbagi pengetahuan teknologi',
  openGraph: {
    title: 'Tentang - FahimTurast',
    description: 'Mengenal lebih dekat FahimTurast - developer yang passionate dalam berbagi pengetahuan teknologi',
  },
};