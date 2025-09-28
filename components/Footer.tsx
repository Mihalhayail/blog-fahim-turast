import Link from "next/link";
import { Instagram, MessageCircleMore, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-extrabold text-3xl text-primary dark:text-white mb-4">
              FahimTurast
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Platform pendidikan yang unggul dan terkemuka dalam membekali
              thalib dengan penguasaan 'ulumul 'arabiah dan 'aqliyah secara
              mendalam.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
              Menu Cepat
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
              >
                Tentang
              </Link>
              <Link
                href="/categories"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
              >
                Kategori
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
              Terhubung
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/fahimturast"
                className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white rounded-lg transition-all transform hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=6281367749342"
                className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white rounded-lg transition-all transform hover:scale-105"
                aria-label="Whatsapp"
              >
                <MessageCircleMore className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@fahimturast?si=8xs13NKLMfdlMkZg"
                className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white rounded-lg transition-all transform hover:scale-105"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="mailto:fahimturast@gmail.com"
                className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white rounded-lg transition-all transform hover:scale-105"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} FahimTurast
          </p>
        </div>
      </div>
    </footer>
  );
}
