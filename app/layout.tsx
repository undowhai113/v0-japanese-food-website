import type React from "react"
import type { Metadata, Viewport } from "next"
import { Roboto, Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-zen-kaku",
})

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-shippori",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Unagista - Cơm Lươn Nhật Bản Cao Cấp | Premium Japanese Unagi",
  description:
    "Unagista - Tinh hoa cơm lươn Nhật Bản. Lươn nướng kabayaki truyền thống, nguyên liệu tươi sống nhập khẩu trực tiếp từ Nhật Bản.",
  keywords: ["unagi", "cơm lươn", "lươn Nhật", "kabayaki", "unadon", "nhà hàng Nhật", "Unagista", "TP.HCM"],
  openGraph: {
    title: "Unagista - Cơm Lươn Nhật Bản Cao Cấp",
    description: "Tinh hoa cơm lươn Nhật Bản - Chuẩn vị kabayaki truyền thống",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0C" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${zenKaku.variable} ${shipporiMincho.variable} ${roboto.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
