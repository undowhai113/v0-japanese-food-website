"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Users, Star, ChefHat, ChevronLeft, ChevronRight } from "lucide-react"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current * 10) / 10)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl font-bold text-gold">
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  )
}

const storyCardsData = {
  vi: [
    {
      id: 1,
      title: "Khởi nguồn 2018",
      description: "Unagista ra đời từ niềm đam mê với món cơm lươn kabayaki - tinh hoa ẩm thực Nhật Bản.",
      image: "/japanese-restaurant-grand-opening-ceremony-traditi.jpg",
    },
    {
      id: 2,
      title: "Nghệ thuật Kabayaki",
      description: "Lươn được nướng theo phương pháp truyền thống, tẩm sốt tare bí quyết gia truyền qua nhiều thế hệ.",
      image: "/japanese-chef-grilling-unagi-eel-kabayaki-over-cha.jpg",
    },
    {
      id: 3,
      title: "Nguyên liệu tươi ngon",
      description: "Lươn tươi nhập khẩu trực tiếp từ các trang trại uy tín tại Nhật Bản, đảm bảo chất lượng cao nhất.",
      image: "/fresh-raw-japanese-eel-unagi-ingredient-on-ice.jpg",
    },
    {
      id: 4,
      title: "Sốt Tare bí truyền",
      description: "Sốt tare được nấu theo công thức gia truyền, ủ qua nhiều năm để đạt độ sánh và vị ngọt đặc trưng.",
      image: "/traditional-japanese-tare-sauce-preparation-pot-da.jpg",
    },
    {
      id: 5,
      title: "Không gian Zen",
      description: "Nhà hàng được thiết kế theo phong cách Zen minimalist, mang đến không gian thưởng thức yên bình.",
      image: "/zen-minimalist-japanese-restaurant-interior-dark-w.jpg",
    },
  ],
  en: [
    {
      id: 1,
      title: "Founded in 2018",
      description: "Unagista was born from a passion for kabayaki eel rice - the essence of Japanese cuisine.",
      image: "/japanese-restaurant-grand-opening-ceremony-traditi.jpg",
    },
    {
      id: 2,
      title: "The Art of Kabayaki",
      description:
        "Eel is grilled using traditional methods, glazed with our secret family tare sauce passed down through generations.",
      image: "/japanese-chef-grilling-unagi-eel-kabayaki-over-cha.jpg",
    },
    {
      id: 3,
      title: "Fresh Ingredients",
      description: "Fresh eel imported directly from reputable farms in Japan, ensuring the highest quality.",
      image: "/fresh-raw-japanese-eel-unagi-ingredient-on-ice.jpg",
    },
    {
      id: 4,
      title: "Secret Tare Sauce",
      description:
        "Our tare sauce is made following a traditional family recipe, aged for years to achieve its signature richness.",
      image: "/traditional-japanese-tare-sauce-preparation-pot-da.jpg",
    },
    {
      id: 5,
      title: "Zen Atmosphere",
      description: "Our restaurant is designed in Zen minimalist style, offering a peaceful dining experience.",
      image: "/zen-minimalist-japanese-restaurant-interior-dark-w.jpg",
    },
  ],
}

export function AboutSection() {
  const { language, t } = useLanguage()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const storyCards = storyCardsData[language]

  const stats = [
    { icon: ChefHat, value: 8, suffix: "+", label: t("about.stat.years") },
    { icon: Users, value: 30000, suffix: "+", label: t("about.stat.customers") },
    { icon: Star, value: 4.9, suffix: "★", label: t("about.stat.rating") },
    { icon: Award, value: 15, suffix: "+", label: t("about.stat.dishes") },
  ]

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollButtons)
      checkScrollButtons()
      return () => container.removeEventListener("scroll", checkScrollButtons)
    }
  }, [])

  return (
    <section id="about" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
            {t("about.label")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("about.title")}
          </h2>
        </motion.div>

        <div className="relative mb-20">
          {/* Scroll Buttons */}
          {canScrollLeft && (
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-gold/30 hover:bg-gold/10 hover:border-gold hidden md:flex"
            >
              <ChevronLeft className="h-5 w-5 text-gold" />
            </Button>
          )}
          {canScrollRight && (
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-gold/30 hover:bg-gold/10 hover:border-gold hidden md:flex"
            >
              <ChevronRight className="h-5 w-5 text-gold" />
            </Button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {storyCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[300px] md:w-[350px] snap-start"
              >
                <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-xl group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator Dots */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {storyCards.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-gold/30" />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-gold-muted"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 mb-4">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
