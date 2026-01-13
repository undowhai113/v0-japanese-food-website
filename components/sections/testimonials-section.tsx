"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const testimonialsData = {
  vi: [
    {
      id: 1,
      name: "Nguyễn Minh Anh",
      role: "Food Blogger",
      avatar: "/vietnamese-woman-professional-portrait.jpg",
      content:
        "Cơm lươn ở Unagista ngon nhất mà tôi từng thử ở Việt Nam. Lươn nướng vàng ươm, sốt tare đậm đà. Chắc chắn sẽ quay lại!",
      rating: 5,
    },
    {
      id: 2,
      name: "Trần Văn Hùng",
      role: "Doanh nhân",
      avatar: "/vietnamese-man-business-portrait.jpg",
      content:
        "Không gian sang trọng, cơm lươn đẳng cấp. Rất phù hợp cho các buổi tiếp khách. Hitsumabushi là món signature không thể bỏ qua.",
      rating: 5,
    },
    {
      id: 3,
      name: "Lê Thị Hương",
      role: "Giáo viên",
      avatar: "/vietnamese-woman-casual-portrait.jpg",
      content:
        "Đặt giao hàng và rất bất ngờ với chất lượng. Lươn vẫn nóng giòn, sốt thơm ngon. Đóng gói cẩn thận. 5 sao!",
      rating: 5,
    },
    {
      id: 4,
      name: "Phạm Quốc Đạt",
      role: "Kỹ sư IT",
      avatar: "/vietnamese-man-young-professional-portrait.jpg",
      content:
        "Combo cho 2 người rất đáng giá. Thích nhất là Unaju Đặc Biệt, lươn dày và béo ngậy. Sẽ giới thiệu cho bạn bè.",
      rating: 5,
    },
  ],
  en: [
    {
      id: 1,
      name: "Nguyen Minh Anh",
      role: "Food Blogger",
      avatar: "/vietnamese-woman-professional-portrait.jpg",
      content:
        "The unagi at Unagista is the best I've tried in Vietnam. Perfectly grilled eel with rich tare sauce. Will definitely come back!",
      rating: 5,
    },
    {
      id: 2,
      name: "Tran Van Hung",
      role: "Businessman",
      avatar: "/vietnamese-man-business-portrait.jpg",
      content:
        "Luxurious atmosphere, premium unagi. Perfect for business dinners. Hitsumabushi is the signature dish you can't miss.",
      rating: 5,
    },
    {
      id: 3,
      name: "Le Thi Huong",
      role: "Teacher",
      avatar: "/vietnamese-woman-casual-portrait.jpg",
      content:
        "Ordered delivery and was amazed by the quality. Eel was still hot and crispy, sauce delicious. Carefully packaged. 5 stars!",
      rating: 5,
    },
    {
      id: 4,
      name: "Pham Quoc Dat",
      role: "IT Engineer",
      avatar: "/vietnamese-man-young-professional-portrait.jpg",
      content:
        "The combo for 2 is great value. Love the Premium Unaju, thick and fatty eel. Will recommend to friends.",
      rating: 5,
    },
  ],
}

export function TestimonialsSection() {
  const { language, t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const testimonials = testimonialsData[language]

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused, testimonials.length])

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
            {t("testimonials.label")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("testimonials.description")}</p>
        </motion.div>

        {/* Aggregate Rating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface border border-gold-muted">
            <span className="font-serif text-3xl font-bold text-gold">4.9</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-current" />
              ))}
            </div>
            <span className="text-muted-foreground">(186 {t("testimonials.reviews")})</span>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-surface rounded-2xl p-8 md:p-12 border border-gold-muted"
            >
              <div className="flex flex-col items-center text-center">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Quote className="w-12 h-12 text-gold/30 mb-6" />
                </motion.div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <Star
                        className={`w-5 h-5 ${
                          i < testimonials[currentIndex].rating ? "text-gold fill-current" : "text-muted-foreground"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="rounded-full border-gold/30 hover:bg-gold/10 hover:border-gold bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-6 bg-gold" : "bg-gold/30 hover:bg-gold/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full border-gold/30 hover:bg-gold/10 hover:border-gold bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
