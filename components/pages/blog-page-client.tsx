"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, User, ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/components/language-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { staggerContainer, staggerItem } from "@/lib/animations"

const blogPostsData = {
  vi: [
    {
      id: "1",
      slug: "bi-quyet-nuong-luon-kabayaki",
      title: "Bí quyết nướng lươn Kabayaki hoàn hảo",
      excerpt:
        "Khám phá kỹ thuật nướng lươn kabayaki truyền thống của Nhật Bản, từ cách chọn lươn đến bí quyết tẩm sốt tare.",
      content: "",
      image: "/placeholder.svg?height=400&width=600",
      category: "Kỹ thuật",
      author: "Chef Tanaka",
      date: "2026-01-10",
      readTime: "5 phút",
      featured: true,
    },
    {
      id: "2",
      slug: "lich-su-mon-unadon",
      title: "Lịch sử và nguồn gốc món Unadon",
      excerpt: "Tìm hiểu về lịch sử hơn 200 năm của món cơm lươn Unadon, từ thời Edo đến ngày nay.",
      content: "",
      image: "/placeholder.svg?height=400&width=600",
      category: "Văn hóa",
      author: "Minh Anh",
      date: "2026-01-08",
      readTime: "7 phút",
      featured: false,
    },
    {
      id: "3",
      slug: "cach-thuong-thuc-hitsumabushi",
      title: "3 cách thưởng thức Hitsumabushi đúng điệu",
      excerpt: "Hướng dẫn chi tiết cách thưởng thức món Hitsumabushi theo phong cách Nagoya truyền thống.",
      content: "",
      image: "/placeholder.svg?height=400&width=600",
      category: "Hướng dẫn",
      author: "Chef Tanaka",
      date: "2026-01-05",
      readTime: "4 phút",
      featured: true,
    },
    {
      id: "4",
      slug: "sot-tare-bi-truyen",
      title: "Sốt Tare - Linh hồn của món cơm lươn",
      excerpt: "Tìm hiểu về quá trình làm sốt tare truyền thống và tại sao nó quan trọng với món cơm lươn.",
      content: "",
      image: "/placeholder.svg?height=400&width=600",
      category: "Nguyên liệu",
      author: "Chef Yamamoto",
      date: "2026-01-03",
      readTime: "6 phút",
      featured: false,
    },
    {
      id: "5",
      slug: "luon-nhat-vs-luon-viet",
      title: "Lươn Nhật vs Lươn Việt: Điểm khác biệt",
      excerpt: "So sánh chi tiết giữa lươn Nhật Bản và lươn Việt Nam về chất lượng, hương vị và cách chế biến.",
      content: "",
      image: "/placeholder.svg?height=400&width=600",
      category: "Nguyên liệu",
      author: "Minh Anh",
      date: "2025-12-28",
      readTime: "8 phút",
      featured: false,
    },
    {
      id: "6",
      slug: "unagista-khai-truong",
      title: "Unagista khai trương chi nhánh mới tại Quận 7",
      excerpt: "Tin vui cho các tín đồ cơm lươn: Unagista chính thức khai trương chi nhánh thứ 3 tại Quận 7.",
      content: "",
      image: "/placeholder.svg?height=400&width=600",
      category: "Tin tức",
      author: "Unagista Team",
      date: "2025-12-25",
      readTime: "3 phút",
      featured: true,
    },
  ],
  en: [
    {
      id: "1",
      slug: "perfect-kabayaki-grilling",
      title: "Secrets to Perfect Kabayaki Grilling",
      excerpt:
        "Discover traditional Japanese kabayaki eel grilling techniques, from selecting eel to the secret tare sauce.",
      content: "",
      image: "/placeholder.svg?height=400&width=600",
      category: "Technique",
      author: "Chef Tanaka",
      date: "2026-01-10",
      readTime: "5 min",
      featured: true,
    },
    {
      id: "2",
      slug: "unadon-history",
      title: "History and Origins of Unadon",
      excerpt: "Learn about the 200+ year history of Unadon eel rice, from the Edo period to today.",
      content: "",
      image: "/placeholder.svg?height=400&width=600",
      category: "Culture",
      author: "Minh Anh",
      date: "2026-01-08",
      readTime: "7 min",
      featured: false,
    },
    {
      id: "3",
      slug: "hitsumabushi-guide",
      title: "3 Ways to Enjoy Hitsumabushi Properly",
      excerpt: "Detailed guide on how to enjoy Hitsumabushi in traditional Nagoya style.",
      content: "",
      image: "/placeholder.svg?height=400&width=600",
      category: "Guide",
      author: "Chef Tanaka",
      date: "2026-01-05",
      readTime: "4 min",
      featured: true,
    },
    {
      id: "4",
      slug: "tare-sauce-secret",
      title: "Tare Sauce - The Soul of Eel Rice",
      excerpt: "Learn about traditional tare sauce making and why it's essential for eel rice.",
      content: "",
      image: "/placeholder.svg?height=400&width=600",
      category: "Ingredients",
      author: "Chef Yamamoto",
      date: "2026-01-03",
      readTime: "6 min",
      featured: false,
    },
    {
      id: "5",
      slug: "japanese-vs-vietnamese-eel",
      title: "Japanese vs Vietnamese Eel: The Differences",
      excerpt: "Detailed comparison between Japanese and Vietnamese eel in quality, taste, and preparation.",
      content: "",
      image: "/placeholder.svg?height=400&width=600",
      category: "Ingredients",
      author: "Minh Anh",
      date: "2025-12-28",
      readTime: "8 min",
      featured: false,
    },
    {
      id: "6",
      slug: "unagista-new-branch",
      title: "Unagista Opens New Branch in District 7",
      excerpt: "Great news for eel rice lovers: Unagista officially opens its 3rd branch in District 7.",
      content: "",
      image: "/placeholder.svg?height=400&width=600",
      category: "News",
      author: "Unagista Team",
      date: "2025-12-25",
      readTime: "3 min",
      featured: true,
    },
  ],
}

const categoriesData = {
  vi: ["Tất cả", "Kỹ thuật", "Văn hóa", "Hướng dẫn", "Nguyên liệu", "Tin tức"],
  en: ["All", "Technique", "Culture", "Guide", "Ingredients", "News"],
}

export function BlogPageClient() {
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState(language === "vi" ? "Tất cả" : "All")
  const [searchQuery, setSearchQuery] = useState("")

  const blogPosts = blogPostsData[language]
  const categories = categoriesData[language]

  const allCategory = language === "vi" ? "Tất cả" : "All"
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === allCategory || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)

  const translations = {
    vi: {
      title: "Blog",
      subtitle: "Khám phá thế giới ẩm thực Nhật Bản",
      featured: "Bài viết nổi bật",
      allPosts: "Tất cả bài viết",
      readMore: "Đọc tiếp",
      search: "Tìm kiếm bài viết...",
      back: "Quay lại",
      noPosts: "Không tìm thấy bài viết nào.",
    },
    en: {
      title: "Blog",
      subtitle: "Explore the world of Japanese cuisine",
      featured: "Featured Posts",
      allPosts: "All Posts",
      readMore: "Read more",
      search: "Search posts...",
      back: "Go back",
      noPosts: "No posts found.",
    },
  }

  const text = translations[language]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-gold">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {text.back}
              </Link>
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">{text.title}</h1>
            <p className="text-muted-foreground text-lg">{text.subtitle}</p>
          </motion.div>

          {/* Featured Posts */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">{text.featured}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.slice(0, 3).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-xl">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-5">
                        <Badge className="bg-gold/10 text-gold border-gold/30 mb-3">{post.category}</Badge>
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* All Posts */}
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground">{text.allPosts}</h2>

              {/* Search */}
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder={text.search}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 bg-surface border-gold-muted focus:border-gold"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gold text-background"
                      : "bg-surface text-foreground hover:bg-gold/10 hover:text-gold"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 gap-6"
            >
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <motion.article key={post.id} variants={staggerItem} className="group">
                    <Link href={`/blog/${post.id}`}>
                      <div className="flex gap-4 bg-card rounded-lg overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-lg p-4">
                        <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <Badge className="bg-gold/10 text-gold border-gold/30 w-fit mb-2 text-xs">
                            {post.category}
                          </Badge>
                          <h3 className="font-serif text-base font-semibold text-foreground mb-2 group-hover:text-gold transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{post.excerpt}</p>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground mt-2">
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-gold transition-colors self-center" />
                      </div>
                    </Link>
                  </motion.article>
                ))
              ) : (
                <p className="text-muted-foreground col-span-2 text-center py-12">{text.noPosts}</p>
              )}
            </motion.div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  )
}
