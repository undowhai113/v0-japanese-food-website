"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  Star,
  Clock,
  Users,
  Flame,
  Minus,
  Plus,
  ShoppingBag,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/components/language-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

interface MenuItem {
  id: string
  slug: string
  name: { vi: string; en: string }
  description: { vi: string; en: string }
  longDescription: { vi: string; en: string }
  price: number
  originalPrice?: number
  category: string
  image: string
  gallery: string[]
  badge?: { vi: string; en: string }
  rating: number
  reviewCount: number
  isHot?: boolean
  ingredients: { vi: string[]; en: string[] }
  nutrition: {
    calories: number
    protein: number
    carbs: number
    fat: number
  }
  allergens: { vi: string[]; en: string[] }
  preparationTime: string
  servingSize: string
}

interface MenuDetailClientProps {
  item: MenuItem
  allItems: MenuItem[]
}

export function MenuDetailClient({ item, allItems }: MenuDetailClientProps) {
  const { language, t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  const relatedItems = allItems.filter((i) => i.id !== item.id && i.category === item.category).slice(0, 3)

  const translations = {
    vi: {
      back: "Quay lại",
      addToCart: "Thêm vào giỏ",
      ingredients: "Thành phần",
      nutrition: "Dinh dưỡng",
      allergens: "Dị ứng",
      calories: "Calories",
      protein: "Protein",
      carbs: "Carbs",
      fat: "Fat",
      prepTime: "Thời gian chuẩn bị",
      serving: "Khẩu phần",
      related: "Món ăn liên quan",
      reviews: "đánh giá",
    },
    en: {
      back: "Go back",
      addToCart: "Add to cart",
      ingredients: "Ingredients",
      nutrition: "Nutrition",
      allergens: "Allergens",
      calories: "Calories",
      protein: "Protein",
      carbs: "Carbs",
      fat: "Fat",
      prepTime: "Prep time",
      serving: "Serving",
      related: "Related dishes",
      reviews: "reviews",
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
              <Link href="/#menu">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {text.back}
              </Link>
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden bg-surface">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={item.gallery[selectedImage]}
                    alt={item.name[language]}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                {item.gallery.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setSelectedImage((prev) => (prev === 0 ? item.gallery.length - 1 : prev - 1))}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-gold/30 hover:bg-gold/10"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setSelectedImage((prev) => (prev === item.gallery.length - 1 ? 0 : prev + 1))}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-gold/30 hover:bg-gold/10"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </>
                )}

                {/* Badge */}
                {item.badge && (
                  <Badge className="absolute top-4 left-4 bg-gold text-background">
                    {item.isHot && <Flame className="w-3 h-3 mr-1" />}
                    {item.badge[language]}
                  </Badge>
                )}
              </div>

              {/* Thumbnails */}
              {item.gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {item.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              {/* Title & Rating */}
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                  {item.name[language]}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-gold">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="font-medium">{item.rating}</span>
                    <span className="text-muted-foreground">
                      ({item.reviewCount} {text.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{item.preparationTime}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{item.servingSize}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">{item.longDescription[language]}</p>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl font-bold text-gold">{item.price.toLocaleString("vi-VN")}đ</span>
                {item.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {item.originalPrice.toLocaleString("vi-VN")}đ
                  </span>
                )}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-surface rounded-full p-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="rounded-full h-10 w-10"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-10 text-center font-medium text-foreground">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="rounded-full h-10 w-10"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>

                <Button className="flex-1 bg-gold text-background hover:bg-gold/90 h-12">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  {text.addToCart}
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`h-12 w-12 border-gold/30 ${isFavorite ? "bg-wine-red/20 text-wine-red" : "hover:bg-gold/10"}`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 border-gold/30 hover:bg-gold/10 bg-transparent"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="ingredients" className="w-full">
                <TabsList className="w-full bg-surface">
                  <TabsTrigger value="ingredients" className="flex-1">
                    {text.ingredients}
                  </TabsTrigger>
                  <TabsTrigger value="nutrition" className="flex-1">
                    {text.nutrition}
                  </TabsTrigger>
                  <TabsTrigger value="allergens" className="flex-1">
                    {text.allergens}
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="ingredients" className="mt-4">
                  <ul className="grid grid-cols-2 gap-2">
                    {item.ingredients[language].map((ingredient, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="nutrition" className="mt-4">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-surface rounded-lg">
                      <p className="text-2xl font-bold text-gold">{item.nutrition.calories}</p>
                      <p className="text-xs text-muted-foreground">{text.calories}</p>
                    </div>
                    <div className="text-center p-3 bg-surface rounded-lg">
                      <p className="text-2xl font-bold text-gold">{item.nutrition.protein}g</p>
                      <p className="text-xs text-muted-foreground">{text.protein}</p>
                    </div>
                    <div className="text-center p-3 bg-surface rounded-lg">
                      <p className="text-2xl font-bold text-gold">{item.nutrition.carbs}g</p>
                      <p className="text-xs text-muted-foreground">{text.carbs}</p>
                    </div>
                    <div className="text-center p-3 bg-surface rounded-lg">
                      <p className="text-2xl font-bold text-gold">{item.nutrition.fat}g</p>
                      <p className="text-xs text-muted-foreground">{text.fat}</p>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="allergens" className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {item.allergens[language].map((allergen, index) => (
                      <Badge key={index} variant="outline" className="border-wine-red/50 text-wine-red">
                        {allergen}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>

          {/* Related Items */}
          {relatedItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">{text.related}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedItems.map((relatedItem) => (
                  <Link key={relatedItem.id} href={`/menu/${relatedItem.id}`}>
                    <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 hover:shadow-xl">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={relatedItem.image || "/placeholder.svg"}
                          alt={relatedItem.name[language]}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
                          {relatedItem.name[language]}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {relatedItem.description[language]}
                        </p>
                        <p className="font-semibold text-gold mt-2">{relatedItem.price.toLocaleString("vi-VN")}đ</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
