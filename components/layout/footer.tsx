"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { useLanguage } from "@/components/language-provider"

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
]

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    menu: [
      { label: "Unadon", href: "#menu" },
      { label: "Unaju", href: "#menu" },
      { label: "Hitsumabushi", href: "#menu" },
      { label: "Set Meals", href: "#menu" },
    ],
    company: [
      { label: t("nav.about"), href: "#about" },
      { label: t("nav.testimonials"), href: "#testimonials" },
      { label: "Careers", href: "#" },
      { label: "News", href: "#" },
    ],
    support: [
      { label: t("nav.contact"), href: "#contact" },
      { label: t("nav.reservation"), href: "#contact" },
      { label: "FAQ", href: "#faq" },
      { label: "Policy", href: "#" },
    ],
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-surface border-t border-gold-muted">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12"
        >
          {/* Brand Column */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <Link href="#home" className="inline-block mb-6">
              <span className="font-serif text-3xl font-bold text-gold">Unagista</span>
              <span className="block text-sm text-muted-foreground">Premium Japanese Unagi</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">{t("footer.description")}</p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span>45 Đồng Khởi, Quận 1, TP.HCM</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:19008686" className="hover:text-gold transition-colors">
                  1900 8686
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="mailto:hello@unagista.vn" className="hover:text-gold transition-colors">
                  hello@unagista.vn
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                <span>11:00 - 21:30 (Daily)</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem}>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">{t("footer.menu")}</h3>
            <ul className="space-y-2">
              {footerLinks.menu.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">{t("footer.support")}</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-muted-foreground hover:text-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <BackToTopButton onClick={scrollToTop} />
    </footer>
  )
}

function BackToTopButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Button
        onClick={onClick}
        size="icon"
        className="rounded-full bg-gold text-background hover:bg-gold/90 shadow-lg animate-pulse-glow"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </motion.div>
  )
}
