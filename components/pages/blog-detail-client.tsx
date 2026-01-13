"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import ReactMarkdown from "react-markdown"

interface BlogPost {
  id: string
  slug: string
  title: { vi: string; en: string }
  excerpt: { vi: string; en: string }
  content: { vi: string; en: string }
  image: string
  category: { vi: string; en: string }
  author: string
  authorImage: string
  date: string
  readTime: { vi: string; en: string }
  tags: { vi: string[]; en: string[] }
}

interface BlogDetailClientProps {
  post: BlogPost
  allPosts: BlogPost[]
}

export function BlogDetailClient({ post, allPosts }: BlogDetailClientProps) {
  const { language } = useLanguage()

  const relatedPosts = allPosts
    .filter((p) => p.id !== post.id && p.category[language] === post.category[language])
    .slice(0, 2)

  const translations = {
    vi: {
      back: "Quay lại",
      share: "Chia sẻ",
      related: "Bài viết liên quan",
      tags: "Tags",
    },
    en: {
      back: "Go back",
      share: "Share",
      related: "Related Posts",
      tags: "Tags",
    },
  }

  const text = translations[language]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-gold">
              <Link href="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {text.back}
              </Link>
            </Button>
          </motion.div>

          {/* Header */}
          <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <Badge className="bg-gold/10 text-gold border-gold/30 mb-4">{post.category[language]}</Badge>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {post.title[language]}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-gold" />
                </div>
                <span className="font-medium text-foreground">{post.author}</span>
              </div>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime[language]}
              </span>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="aspect-[16/9] rounded-lg overflow-hidden mb-10"
          >
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title[language]}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none mb-10
              prose-headings:font-serif prose-headings:text-foreground
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-blockquote:border-l-gold prose-blockquote:bg-gold/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
              prose-ul:text-muted-foreground prose-ol:text-muted-foreground
              prose-li:marker:text-gold"
          >
            <ReactMarkdown>{post.content[language]}</ReactMarkdown>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-2 mb-10 pb-10 border-b border-gold-muted"
          >
            <Tag className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground mr-2">{text.tags}:</span>
            {post.tags[language].map((tag) => (
              <Badge key={tag} variant="outline" className="border-gold/30 text-foreground">
                {tag}
              </Badge>
            ))}
          </motion.div>

          {/* Share */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 mb-16"
          >
            <span className="text-sm text-muted-foreground">{text.share}:</span>
            <Button variant="outline" size="icon" className="border-gold/30 hover:bg-gold/10 bg-transparent">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="border-gold/30 hover:bg-gold/10 bg-transparent">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="border-gold/30 hover:bg-gold/10 bg-transparent">
              <Share2 className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">{text.related}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-xl">
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title[language]}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-gold transition-colors line-clamp-2">
                          {relatedPost.title[language]}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {relatedPost.excerpt[language]}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </article>
      </main>
      <Footer />
    </>
  )
}
