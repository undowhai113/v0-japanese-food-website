"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Star, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { staggerContainer } from "@/lib/animations"
import { useLanguage } from "@/components/language-provider"
import { FlipMenuButton } from "@/components/sections/flip-menu"

const menuItemsData = {
  vi: [
    {
      id: "1",
      name: "Unaju Đặc Biệt",
      description: "Cơm lươn nướng kabayaki cao cấp, lươn Nhật tươi sống, sốt tare gia truyền",
      price: 450000,
      originalPrice: 550000,
      category: "unagi",
      image: "/premium-unaju-grilled-eel-rice-box-japanese.jpg",
      badge: "Bán chạy",
      rating: 4.9,
      isHot: true,
    },
    {
      id: "2",
      name: "Unadon Truyền Thống",
      description: "Cơm lươn đặt trên cơm Nhật dẻo thơm, rắc sansho",
      price: 320000,
      category: "unagi",
      image: "/unadon-grilled-eel-rice-bowl-traditional.jpg",
      badge: "Đặc biệt",
      rating: 4.8,
      isHot: true,
    },
    {
      id: "3",
      name: "Hitsumabushi",
      description: "Cơm lươn Nagoya 3 cách thưởng thức: nguyên bản, với gia vị, với nước dùng",
      price: 520000,
      category: "unagi",
      image: "/hitsumabushi-nagoya-style-grilled-eel-three-ways.jpg",
      rating: 4.9,
    },
    {
      id: "4",
      name: "Set Cơm Lươn & Sashimi",
      description: "Unadon kèm sashimi cá hồi, súp miso, rau củ ngâm",
      price: 480000,
      category: "set",
      image: "/japanese-set-meal-unadon-sashimi-miso-soup.jpg",
      badge: "Mới",
      rating: 4.7,
    },
    {
      id: "5",
      name: "Unagi Sashimi",
      description: "Lươn sống thái mỏng, ăn kèm gừng và wasabi",
      price: 380000,
      category: "side",
      image: "/fresh-unagi-eel-sashimi-japanese.jpg",
      rating: 4.6,
    },
    {
      id: "6",
      name: "Matcha Parfait",
      description: "Parfait trà xanh với kem, mochi và red bean",
      price: 95000,
      category: "dessert",
      image: "/matcha-green-tea-parfait-japanese-dessert.jpg",
      badge: "Yêu thích",
      rating: 4.8,
    },
  ],
  en: [
    {
      id: "1",
      name: "Premium Unaju",
      description: "Premium grilled eel kabayaki, fresh Japanese eel, traditional tare sauce",
      price: 450000,
      originalPrice: 550000,
      category: "unagi",
      image: "/premium-unaju-grilled-eel-rice-box-japanese.jpg",
      badge: "Best Seller",
      rating: 4.9,
      isHot: true,
    },
    {
      id: "2",
      name: "Traditional Unadon",
      description: "Grilled eel on fluffy Japanese rice, topped with sansho pepper",
      price: 320000,
      category: "unagi",
      image: "/unadon-grilled-eel-rice-bowl-traditional.jpg",
      badge: "Special",
      rating: 4.8,
      isHot: true,
    },
    {
      id: "3",
      name: "Hitsumabushi",
      description: "Nagoya-style eel rice with 3 ways to enjoy: original, with condiments, with broth",
      price: 520000,
      category: "unagi",
      image: "/hitsumabushi-nagoya-style-grilled-eel-three-ways.jpg",
      rating: 4.9,
    },
    {
      id: "4",
      name: "Unagi & Sashimi Set",
      description: "Unadon with salmon sashimi, miso soup, pickled vegetables",
      price: 480000,
      category: "set",
      image: "/japanese-set-meal-unadon-sashimi-miso-soup.jpg",
      badge: "New",
      rating: 4.7,
    },
    {
      id: "5",
      name: "Unagi Sashimi",
      description: "Thinly sliced fresh eel, served with ginger and wasabi",
      price: 380000,
      category: "side",
      image: "/fresh-unagi-eel-sashimi-japanese.jpg",
      rating: 4.6,
    },
    {
      id: "6",
      name: "Matcha Parfait",
      description: "Green tea parfait with ice cream, mochi and red bean",
      price: 95000,
      category: "dessert",
      image: "/matcha-green-tea-parfait-japanese-dessert.jpg",
      badge: "Favorite",
      rating: 4.8,
    },
  ],
}

export function MenuSection() {
  const { language, t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: t("menu.all") },
    { id: "unagi", label: t("menu.unagi") },
    { id: "set", label: t("menu.set") },
    { id: "side", label: t("menu.side") },
    { id: "dessert", label: t("menu.dessert") },
  ]

  const menuItems = menuItemsData[language]
  const filteredItems =
    activeCategory === "all" ? menuItems : menuItems.filter((item) => item.category === activeCategory)

  return (
    <section id="menu" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
            {t("menu.label")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t("menu.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("menu.description")}</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id ? "text-background" : "text-foreground hover:text-gold"
              }`}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gold rounded-full"
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                />
              )}
              <span className="relative z-10">{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <MenuItem key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <FlipMenuButton />
        </motion.div>
      </div>
    </section>
  )
}

interface MenuItemProps {
  item: {
    id: string
    name: string
    description: string
    price: number
    originalPrice?: number
    category: string
    image: string
    badge?: string
    rating: number
    isHot?: boolean
  }
  index: number
}

function MenuItem({ item, index }: MenuItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group"
    >
      <Link href={`/menu/${item.id}`}>
        <div className="relative bg-card rounded-lg overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Badge */}
            {item.badge && (
              <Badge className="absolute top-3 left-3 bg-gold text-background">
                {item.isHot && <Flame className="w-3 h-3 mr-1" />}
                {item.badge}
              </Badge>
            )}

            {/* Add Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <Button size="icon" className="rounded-full bg-gold text-background hover:bg-gold/90 shadow-lg">
                <Plus className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1 text-gold">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">{item.rating}</span>
              </div>
            </div>

            <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-gold transition-colors">
              {item.name}
            </h3>

            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-gold">{item.price.toLocaleString("vi-VN")}đ</span>
              {item.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {item.originalPrice.toLocaleString("vi-VN")}đ
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
