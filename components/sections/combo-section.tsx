"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, Flame, ChevronLeft, ChevronRight, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

const combosData = {
  vi: [
    {
      id: 1,
      name: "Combo Đặc Biệt",
      description: "Trọn bộ trải nghiệm cơm lươn cao cấp dành cho 2 người.",
      items: [
        "Unaju Đặc Biệt (phần lớn)",
        "Unadon Truyền Thống",
        "Unagi Sashimi 6 miếng",
        "Súp miso & Rau củ ngâm",
        "2 đồ uống tự chọn",
      ],
      price: 699000,
      originalPrice: 930000,
      discount: 25,
      image: "/luxury-unagi-eel-combo-set-japanese-food-dark-eleg.jpg",
      badge: "HOT DEAL",
      for: "Cho 2 người",
      isHot: true,
    },
    {
      id: 2,
      name: "Combo Gia Đình",
      description: "Set ăn gia đình với đầy đủ các món đặc sắc, phù hợp cho 4 người.",
      items: [
        "2x Unaju Đặc Biệt",
        "2x Unadon Truyền Thống",
        "Unagi Sashimi 12 miếng",
        "4 Súp miso & Rau củ ngâm",
        "4 đồ uống tự chọn",
        "Matcha Parfait",
      ],
      price: 1290000,
      originalPrice: 1720000,
      discount: 25,
      image: "/japanese-family-meal-set-unagi-eel-rice-multiple-d.jpg",
      badge: "FAMILY",
      for: "Cho 4 người",
    },
    {
      id: 3,
      name: "Combo Hẹn Hò",
      description: "Set lãng mạn dành cho 2 người với những món ăn tinh tế nhất.",
      items: [
        "Hitsumabushi Special",
        "Unaju Đặc Biệt",
        "Unagi Sashimi 8 miếng",
        "2 Súp miso",
        "2 Matcha Parfait",
        "2 đồ uống tự chọn",
      ],
      price: 890000,
      originalPrice: 1180000,
      discount: 25,
      image: "/romantic-japanese-dinner-set-unagi-candlelight-ele.jpg",
      badge: "DATE NIGHT",
      for: "Cho 2 người",
    },
    {
      id: 4,
      name: "Combo Tiết Kiệm",
      description: "Set ăn trưa tiết kiệm với giá ưu đãi đặc biệt.",
      items: ["Unadon Truyền Thống", "Súp miso", "Rau củ ngâm", "1 đồ uống tự chọn"],
      price: 299000,
      originalPrice: 399000,
      discount: 25,
      image: "/japanese-lunch-set-unadon-eel-rice-bowl-simple.jpg",
      badge: "LUNCH",
      for: "Cho 1 người",
    },
  ],
  en: [
    {
      id: 1,
      name: "Special Combo",
      description: "Complete premium unagi experience for 2 people.",
      items: [
        "Premium Unaju (large)",
        "Traditional Unadon",
        "Unagi Sashimi 6 pcs",
        "Miso soup & Pickled vegetables",
        "2 drinks of choice",
      ],
      price: 699000,
      originalPrice: 930000,
      discount: 25,
      image: "/luxury-unagi-eel-combo-set-japanese-food-dark-eleg.jpg",
      badge: "HOT DEAL",
      for: "For 2 people",
      isHot: true,
    },
    {
      id: 2,
      name: "Family Combo",
      description: "Family set meal with all special dishes, perfect for 4 people.",
      items: [
        "2x Premium Unaju",
        "2x Traditional Unadon",
        "Unagi Sashimi 12 pcs",
        "4 Miso soup & Pickled vegetables",
        "4 drinks of choice",
        "Matcha Parfait",
      ],
      price: 1290000,
      originalPrice: 1720000,
      discount: 25,
      image: "/japanese-family-meal-set-unagi-eel-rice-multiple-d.jpg",
      badge: "FAMILY",
      for: "For 4 people",
    },
    {
      id: 3,
      name: "Date Night Combo",
      description: "Romantic set for 2 with the most exquisite dishes.",
      items: [
        "Hitsumabushi Special",
        "Premium Unaju",
        "Unagi Sashimi 8 pcs",
        "2 Miso soup",
        "2 Matcha Parfait",
        "2 drinks of choice",
      ],
      price: 890000,
      originalPrice: 1180000,
      discount: 25,
      image: "/romantic-japanese-dinner-set-unagi-candlelight-ele.jpg",
      badge: "DATE NIGHT",
      for: "For 2 people",
    },
    {
      id: 4,
      name: "Budget Combo",
      description: "Budget-friendly lunch set with special discount.",
      items: ["Traditional Unadon", "Miso soup", "Pickled vegetables", "1 drink of choice"],
      price: 299000,
      originalPrice: 399000,
      discount: 25,
      image: "/japanese-lunch-set-unadon-eel-rice-bowl-simple.jpg",
      badge: "LUNCH",
      for: "For 1 person",
    },
  ],
}

export function ComboSection() {
  const { language, t } = useLanguage()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const combos = combosData[language]

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
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
    <section id="combo" className="py-24 lg:py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="bg-wine-red text-foreground mb-4">
            <Gift className="w-3 h-3 mr-1" />
            {t("combo.badge")}
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("combo.title")}
            <span className="block text-gold">{t("combo.discount")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("combo.description")}</p>
        </motion.div>

        {/* Horizontal Scroll Combos */}
        <div className="relative">
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
            {combos.map((combo, index) => (
              <motion.div
                key={combo.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[340px] md:w-[400px] snap-start"
              >
                <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={combo.image}
                      alt={combo.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Badge */}
                    <Badge className="absolute top-3 left-3 bg-wine-red text-foreground">
                      {combo.isHot && <Flame className="w-3 h-3 mr-1" />}
                      {combo.badge}
                    </Badge>

                    {/* For Badge */}
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                      className="absolute top-3 right-3 bg-gold text-background px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {combo.for}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{combo.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{combo.description}</p>

                    {/* Items List */}
                    <ul className="space-y-2 mb-4 flex-1">
                      {combo.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-gold" />
                          </div>
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-4 border-t border-gold-muted">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-2xl font-bold text-gold">
                          {combo.price.toLocaleString("vi-VN")}đ
                        </span>
                        <div className="flex flex-col">
                          <span className="text-xs text-muted-foreground line-through">
                            {combo.originalPrice.toLocaleString("vi-VN")}đ
                          </span>
                          <Badge variant="outline" className="border-gold text-gold text-xs">
                            -{combo.discount}%
                          </Badge>
                        </div>
                      </div>
                      <Button size="sm" className="bg-gold text-background hover:bg-gold/90">
                        {t("combo.cta")}
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {combos.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-gold/30" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
