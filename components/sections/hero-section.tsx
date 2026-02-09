"use client"

import { motion } from "framer-motion"
import { ArrowDown, Fish, Clock, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { useLanguage } from "@/components/language-provider"

export function HeroSection() {
  const { t } = useLanguage()

  const uspChips = [
    { icon: Fish, text: t("hero.usp.fresh") },
    { icon: Utensils, text: t("hero.usp.sauce") },
    { icon: Clock, text: t("hero.usp.delivery") },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          >
            <source src="/assets/video_background.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm text-gold font-medium">{t("hero.badge")}</span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance"
          >
            {t("hero.title")}
            <span className="block text-gold mt-2">{t("hero.subtitle")}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={staggerItem}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          {/* USP Chips */}
          <motion.div variants={staggerContainer} className="flex flex-wrap justify-center gap-4 mb-10">
            {uspChips.map((chip, index) => (
              <motion.div
                key={chip.text}
                variants={staggerItem}
                className="animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-gold-muted">
                  <chip.icon className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium text-foreground">{chip.text}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gold text-background hover:bg-gold/90 font-medium px-8 shadow-lg hover:shadow-xl transition-all"
            >
              <a href="#menu">{t("hero.cta.menu")}</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold/10 font-medium px-8 bg-transparent"
            >
              <a href="#contact">{t("hero.cta.book")}</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">{t("hero.scroll")}</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
