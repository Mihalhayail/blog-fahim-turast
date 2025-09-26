# FahimTurast Blog

Blog pribadi modern yang dibangun dengan Next.js dan Markdown. Desain yang bersih, responsif, dan optimal untuk SEO.

## ✨ Fitur

- 📝 **Konten Markdown** - Semua artikel ditulis dalam format Markdown dengan frontmatter
- 🎨 **Design Modern** - UI yang bersih dan profesional dengan mode gelap/terang
- 📱 **Responsif** - Optimal di semua perangkat (mobile, tablet, desktop)  
- ⚡ **Performa Tinggi** - Static Site Generation dengan Next.js
- 🔍 **SEO Optimized** - Meta tags dinamis dan struktur URL yang SEO-friendly
- 🏷️ **Sistem Tag** - Kategorisasi artikel dengan tag dan halaman kategori
- 💻 **Syntax Highlighting** - Code blocks dengan syntax highlighting
- 🌙 **Dark Mode** - Toggle mode gelap/terang dengan persistensi
- 📊 **Analytics Ready** - Siap untuk integrasi Google Analytics

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x atau lebih baru
- npm, yarn, atau pnpm

### Installation

1. Clone repository:
```bash
git clone https://github.com/fahimturast/blog.git
cd blog
```

2. Install dependencies:
```bash
npm install
# atau
yarn install
# atau
pnpm install
```

3. Jalankan development server:
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser

## 📁 Struktur Project

```
fahimturast-blog/
├── app/                      # Next.js 13+ App Router
│   ├── posts/[slug]/        # Halaman detail artikel
│   ├── about/               # Halaman tentang
│   ├── categories/          # Halaman kategori
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Halaman home
├── components/              # React components
│   ├── Layout.tsx           # Layout utama
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer
│   └── PostCard.tsx         # Kartu artikel
├── lib/                     # Utility functions
│   └── posts.ts             # Markdown processing
├── posts/                   # File Markdown artikel
│   ├── artikel-1.md
│   ├── artikel-2.md
│   └── ...
├── types/                   # TypeScript type definitions
│   └── post.ts
└── README.md
```

## ✍️ Menulis Artikel Baru

1. Buat file `.md` baru di folder `posts/`
2. Tambahkan frontmatter di bagian atas file:

```markdown
---
title: "Judul Artikel Anda"
date: "2024-01-15"
excerpt: "Ringkasan singkat artikel yang menarik pembaca"
tags: ["React", "Next.js", "Tutorial"]
---

# Judul Artikel

Konten artikel Anda dimulai di sini...
```

3. Tulis konten dalam format Markdown
4. Simpan file dan artikel akan otomatis muncul di blog

### Format Frontmatter Lengkap

```markdown
---
title: "Judul Artikel Anda"
date: "2024-01-15"
excerpt: "Ringkasan singkat artikel yang menarik pembaca"
tags: ["React", "Next.js", "Tutorial"]
thumbnail: "https://images.pexels.com/photos/example.jpg"
---
```

**Tips untuk Thumbnail:**
- Gunakan gambar berkualitas tinggi (minimal 1200x630px)
- Pastikan gambar relevan dengan konten artikel
- Gunakan URL gambar dari Pexels, Unsplash, atau hosting gambar lainnya
- Jika tidak ada thumbnail, akan ditampilkan placeholder icon

## 🎨 Kustomisasi

### Mengubah Tema Warna

Edit file `tailwind.config.ts` untuk menyesuaikan palet warna:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        // ... warna lainnya
      }
    }
  }
}
```

### Mengubah Font

Edit file `app/layout.tsx` untuk mengganti font:

```typescript
import { Inter, Roboto } from 'next/font/google';

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'] 
});
```

### Menambah Social Links

Edit file `components/Footer.tsx` untuk menambah atau mengubah link social media.

## 📦 Build dan Deploy

### Build Production

```bash
npm run build
```

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub repository
2. Import project di [Vercel Dashboard](https://vercel.com)
3. Deploy otomatis akan terjadi setiap kali push ke main branch

### Deploy ke Netlify

1. Build project: `npm run build`
2. Upload folder `out/` ke Netlify
3. Atau connect repository untuk continuous deployment

## 🔧 Konfigurasi

### Environment Variables

Buat file `.env.local` untuk konfigurasi:

```env
NEXT_PUBLIC_SITE_URL=https://blog.fahimturast.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### SEO Configuration

Edit file `app/layout.tsx` untuk mengubah meta tags default:

```typescript
export const metadata: Metadata = {
  title: 'Your Blog Name',
  description: 'Your blog description',
  // ... konfigurasi lainnya
};
```

## 📈 Analytics

Untuk menambahkan Google Analytics:

1. Install `@next/third-parties`:
```bash
npm install @next/third-parties
```

2. Tambahkan di `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        {children}
        <GoogleAnalytics gaId="GA_MEASUREMENT_ID" />
      </body>
    </html>
  )
}
```

## 🐛 Troubleshooting

### Error saat Build

1. **Module not found**: Pastikan semua dependencies terinstall
2. **Markdown parsing error**: Cek format frontmatter di file markdown
3. **Type errors**: Jalankan `npm run type-check`

### Performance Issues

1. **Lambat saat development**: Clear `.next` folder dan restart dev server
2. **Bundle size besar**: Analyze dengan `npm run analyze`

## 🤝 Contributing

1. Fork repository
2. Buat branch baru: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push ke branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

Project ini menggunakan MIT License. Lihat file `LICENSE` untuk detail lengkap.

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:

- **Email**: hello@fahimturast.com
- **Twitter**: [@fahimturast](https://twitter.com/fahimturast)
- **GitHub Issues**: [Create an issue](https://github.com/fahimturast/blog/issues)

---

**Happy Blogging!** 🎉

Dibuat dengan ❤️ oleh FahimTurast menggunakan Next.js dan Tailwind CSS.