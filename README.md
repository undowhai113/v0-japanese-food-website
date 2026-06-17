<div align="center">

# 🍣 Japanese Food Restaurant

**Website landing page chuyên nghiệp cho nhà hàng đồ Nhật**

Trang web giới thiệu thương hiệu, thực đơn, combo khuyến mãi, blog ẩm thực với đa ngôn ngữ (🇻🇳🇺🇸🇯🇵) và trải nghiệm người dùng cao cấp.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-latest-8A2BE2?style=flat-square)](https://www.radix-ui.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/undowhai113s-projects/v0-japanese-food-website)

[🚀 Demo](#-getting-started) · [✨ Features](#-features) · [🛠️ Tech Stack](#%EF%B8%8F-tech-stack) · [📁 Structure](#-project-structure) · [🌐 Multi-language](#-multi-language-support) · [🧩 Components](#-component-architecture)

</div>

---

## 📖 Table of Contents

- [Overview](#overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#%EF%B8%8F-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🌐 Multi-language Support](#-multi-language-support)
- [🧩 Component Architecture](#-component-architecture)
- [🎨 Design Highlights](#-design-highlights)
- [🚢 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)

---

## Overview

Japanese Food Restaurant là một website landing page hiện đại dành cho chuỗi nhà hàng đồ Nhật. Được xây dựng với **Next.js 16 App Router**, website mang đến trải nghiệm ẩm thực đẳng cấp qua:

- Giao diện **sang trọng, tối giản** phong cách Nhật Bản
- **Đa ngôn ngữ** (Tiếng Việt, English, 日本語)
- **Hoạt ảnh mượt mà** với Framer Motion
- **Responsive** trên mọi thiết bị
- **Tối ưu SEO** với Next.js

---

## ✨ Features

### 🏠 Landing Page
- **Hero Section** — Video background + hiệu ứng parallax + USP chips
- **About Section** — Giới thiệu thương hiệu và sứ mệnh
- **Menu Section** — Danh sách món ăn với ảnh và giá
- **Combo Section** — Gợi ý combo khuyến mãi
- **Testimonials** — Đánh giá từ khách hàng
- **Contact Section** — Form liên hệ + Google Maps
- **FAQ Section** — Câu hỏi thường gặp (Accordion UI)

### 📝 Blog System
- Trang danh sách bài viết (`/blog`)
- Chi tiết bài viết (`/blog/[id]`)
- Nội dung ẩm thực, văn hóa Nhật Bản

### 🍜 Menu Detail
- Trang chi tiết món ăn (`/menu/[id]`)
- Thông tin dinh dưỡng, nguyên liệu

### 🌐 i18n
- Chuyển đổi ngôn ngữ real-time (🇻🇳🇺🇸🇯🇵)
- Không cần reload trang

### 🎨 UI/UX
- Dark/Light theme toggle
- Framer Motion animations (stagger, fade, slide, parallax)
- Radix UI components (accessible & customizable)
- Fully responsive design

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) | React framework với SSR/SSG |
| **UI Library** | [React 19](https://react.dev/) | Component-based UI |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type safety |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS |
| **Animation** | [Framer Motion 12](https://www.framer.com/motion/) | Smooth animations & transitions |
| **Components** | [Radix UI](https://www.radix-ui.com/) | Accessible UI primitives |
| **Icons** | [Lucide React](https://lucide.dev/) | Icon set |
| **Forms** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) | Form validation |
| **Analytics** | [Vercel Analytics](https://vercel.com/analytics) | Traffic insights |
| **Deployment** | [Vercel](https://vercel.com/) | Hosting & CI/CD |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 20.x trở lên
- **pnpm** (khuyến nghị) hoặc npm

### Installation

```bash
# Clone repository
git clone https://github.com/undowhai113/v0-japanese-food-website.git
cd v0-japanese-food-website

# Cài đặt dependencies
pnpm install
# hoặc: npm install

# Chạy development server
pnpm dev
# hoặc: npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) — website đã sẵn sàng!

### Scripts

| Command | Mô tả |
|---------|-------|
| `pnpm dev` | Chạy dev server |
| `pnpm build` | Build production |
| `pnpm start` | Start production server |
| `pnpm lint` | Kiểm tra code |

---

## 📁 Project Structure

```
v0-japanese-food-website/
├── app/                              # 📄 Next.js App Router pages
│   ├── layout.tsx                     # Root layout (fonts, theme, i18n)
│   ├── page.tsx                       # Trang chủ (8 sections)
│   ├── globals.css                    # Global styles
│   ├── blog/                          # Blog routes
│   │   ├── page.tsx                   # Danh sách bài viết
│   │   └── [id]/page.tsx             # Chi tiết bài viết
│   └── menu/                          # Menu routes
│       └── [id]/page.tsx             # Chi tiết món ăn
│
├── components/                        # 🧩 React components
│   ├── layout/                        # Layout components
│   │   ├── header.tsx                 # Navigation bar (responsive)
│   │   └── footer.tsx                 # Footer
│   │
│   ├── sections/                      # Landing page sections
│   │   ├── hero-section.tsx           # Hero với video background
│   │   ├── about-section.tsx          # Giới thiệu thương hiệu
│   │   ├── menu-section.tsx           # Thực đơn món ăn
│   │   ├── combo-section.tsx          # Combo khuyến mãi
│   │   ├── testimonials-section.tsx   # Đánh giá khách hàng
│   │   ├── contact-section.tsx        # Liên hệ & map
│   │   ├── faq-section.tsx            # FAQ accordion
│   │   └── flip-menu.tsx              # Flip effect menu card
│   │
│   ├── pages/                         # Page-level components
│   │   ├── blog-page-client.tsx
│   │   ├── blog-detail-client.tsx
│   │   └── menu-detail-client.tsx
│   │
│   └── ui/                            # UI primitives (Radix + custom)
│       ├── accordion.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── tabs.tsx
│       └── textarea.tsx
│
├── lib/                               # 📚 Libraries & utilities
│   ├── animations.ts                  # Framer Motion variants
│   ├── utils.ts                       # Utility functions
│   ├── language-provider.tsx          # i18n context provider
│   └── theme-provider.tsx             # Dark/Light theme context
│
├── public/                            # 🖼️ Static assets
│   └── assets/                        # Images, videos, fonts
│       └── video_background.mp4       # Hero background video
│
├── package.json                       # Dependencies & scripts
├── next.config.mjs                    # Next.js config
├── tsconfig.json                      # TypeScript config
├── postcss.config.mjs                 # PostCSS config
├── tailwind.config.ts                 # Tailwind config
└── components.json                    # shadcn/ui config
```

---

## 🌐 Multi-language Support

Website hỗ trợ **3 ngôn ngữ** thông qua React Context API:

| Ngôn ngữ | Code | Flag |
|----------|------|------|
| Tiếng Việt | `vi` | 🇻🇳 |
| English | `en` | 🇺🇸 |
| 日本語 | `ja` | 🇯🇵 |

**Cách hoạt động:**
- `LanguageProvider` quản lý state ngôn ngữ global
- `useLanguage()` hook cung cấp hàm `t()` để dịch text
- Chuyển đổi ngôn ngữ tức thì, không reload trang
- Dữ liệu dịch được quản lý tập trung trong provider

```tsx
// Sử dụng trong component
const { t, language, setLanguage } = useLanguage()
// t("hero.usp.fresh") → "Tươi sống mỗi ngày" / "Fresh Daily" / "毎日新鮮"
```

---

## 🧩 Component Architecture

### Layout Flow

```
Root Layout (ThemeProvider → LanguageProvider)
  └── Header (Navbar với language switcher)
  └── HomePage
      ├── HeroSection (video + parallax + USP chips)
      ├── AboutSection
      ├── MenuSection (tab-based menu categories)
      ├── ComboSection
      ├── TestimonialsSection (carousel)
      ├── ContactSection (form + map)
      ├── FAQSection (accordion)
      └── Footer
```

### Design Highlights

- **Color Palette**: Tông màu đen/trắng chủ đạo, điểm nhấn đỏ (truyền thống Nhật Bản)
- **Typography**: Montserrat (body) + Playfair Display (headings)
- **Animations**: 
  - `staggerContainer` / `staggerItem` — hiệu ứng hiện dần theo danh sách
  - Parallax scroll trên hero section
  - Flip card effect trên menu (`FlipMenu`)
  - Fade-in khi scroll (intersection observer)
- **Responsive**: Mobile-first, tối ưu trên mọi kích thước màn hình

---

## 🚢 Deployment

Dự án được deploy trên **Vercel** với auto-sync từ GitHub:

```bash
# Deploy via Vercel CLI
npx vercel
# hoặc: npx vercel --prod
```

Truy cập: [https://v0-japanese-food-website.vercel.app](https://v0-japanese-food-website.vercel.app)

Mỗi lần push lên `main`, Vercel tự động build và deploy.

---

## 🤝 Contributing

Mọi đóng góp đều được hoan nghênh!

1. Fork repository
2. Tạo branch: `git checkout -b feature/<tên-tính-năng>`
3. Commit: `git commit -m 'feat: thêm tính năng X'`
4. Push: `git push origin feature/<tên-tính-năng>`
5. Tạo Pull Request

---

<div align="center">

**Built with ❤️ by [undowhai113](https://github.com/undowhai113)**

⭐ Star này nếu bạn thấy dự án hữu ích!

</div>