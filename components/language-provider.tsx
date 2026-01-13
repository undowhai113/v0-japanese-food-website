"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "vi" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  vi: {
    // Header
    "nav.home": "Trang chủ",
    "nav.menu": "Thực đơn",
    "nav.combo": "Combo",
    "nav.about": "Về chúng tôi",
    "nav.testimonials": "Đánh giá",
    "nav.contact": "Liên hệ",
    "nav.reservation": "Đặt bàn",

    // Hero
    "hero.badge": "Est. 2018",
    "hero.title": "Tinh hoa cơm lươn Nhật",
    "hero.subtitle": "Chuẩn vị Kabayaki",
    "hero.description":
      "Lươn tươi nhập khẩu trực tiếp từ Nhật Bản. Nướng kabayaki truyền thống với bí quyết gia truyền. Giao hàng nhanh trong 30 phút.",
    "hero.usp.fresh": "Lươn tươi mỗi ngày",
    "hero.usp.sauce": "Sốt tare bí truyền",
    "hero.usp.delivery": "Giao 30 phút",
    "hero.cta.menu": "Xem thực đơn",
    "hero.cta.book": "Đặt bàn",
    "hero.scroll": "Khám phá",

    // About
    "about.label": "Câu chuyện của chúng tôi",
    "about.title": "Hành trình mang hương vị lươn Nhật đến Việt Nam",
    "about.p1":
      "Unagista ra đời từ niềm đam mê với món cơm lươn kabayaki - tinh hoa ẩm thực Nhật Bản. Chúng tôi tin rằng mỗi miếng lươn nướng là một tác phẩm nghệ thuật.",
    "about.p2":
      "Lươn được tuyển chọn kỹ lưỡng từ các trang trại uy tín tại Nhật Bản. Sốt tare được nấu theo công thức gia truyền, ủ qua nhiều năm để đạt độ sánh và vị ngọt đặc trưng.",
    "about.stat.years": "Năm kinh nghiệm",
    "about.stat.customers": "Khách hàng hài lòng",
    "about.stat.rating": "Đánh giá trung bình",
    "about.stat.dishes": "Món signature",

    // Menu
    "menu.label": "Thực đơn",
    "menu.title": "Món ăn đặc sắc",
    "menu.description": "Khám phá những món cơm lươn và ẩm thực Nhật Bản tinh tế",
    "menu.all": "Tất cả",
    "menu.unagi": "Cơm Lươn",
    "menu.set": "Set ăn",
    "menu.side": "Món phụ",
    "menu.dessert": "Tráng miệng",
    "menu.viewAll": "Xem toàn bộ thực đơn",

    // Combo
    "combo.badge": "HOT DEAL",
    "combo.title": "Combo Đặc Biệt",
    "combo.discount": "Tiết kiệm 25%",
    "combo.description":
      "Trọn bộ trải nghiệm cơm lươn cao cấp dành cho 2 người. Thưởng thức đủ vị từ unadon, unaju đến các món ăn kèm hấp dẫn.",
    "combo.cta": "Đặt combo ngay",
    "combo.for2": "Cho 2 người",

    // Testimonials
    "testimonials.label": "Đánh giá",
    "testimonials.title": "Khách hàng nói gì",
    "testimonials.description": "Hơn 30,000 khách hàng đã tin tưởng và yêu thích Unagista",
    "testimonials.reviews": "đánh giá",

    // Contact
    "contact.label": "Liên hệ",
    "contact.title": "Đặt bàn ngay hôm nay",
    "contact.description": "Hãy để chúng tôi mang đến cho bạn trải nghiệm cơm lươn Nhật Bản đáng nhớ.",
    "contact.hotline": "Hotline",
    "contact.email": "Email",
    "contact.address": "Địa chỉ",
    "contact.hours": "Giờ mở cửa",
    "contact.form.title": "Đặt bàn",
    "contact.form.name": "Họ tên",
    "contact.form.phone": "Số điện thoại",
    "contact.form.date": "Ngày",
    "contact.form.time": "Giờ",
    "contact.form.guests": "Số người",
    "contact.form.note": "Ghi chú",
    "contact.form.notePlaceholder": "Yêu cầu đặc biệt (dị ứng, sinh nhật, v.v.)",
    "contact.form.submit": "Đặt bàn ngay",
    "contact.form.submitting": "Đang xử lý...",
    "contact.form.success": "Đặt bàn thành công!",
    "contact.form.successDesc": "Chúng tôi sẽ liên hệ xác nhận trong vòng 30 phút.",

    // Footer
    "footer.menu": "Thực đơn",
    "footer.company": "Công ty",
    "footer.support": "Hỗ trợ",
    "footer.description":
      "Tinh hoa cơm lươn Nhật Bản tại TP.HCM. Mỗi miếng lươn là một tác phẩm nghệ thuật, được chế biến từ nguyên liệu tươi ngon nhất.",
    "footer.copyright": "© 2026 Unagista. All rights reserved.",

    // FAQ
    "faq.label": "Câu hỏi thường gặp",
    "faq.title": "Bạn thắc mắc điều gì?",

    "flipMenu.viewFullMenu": "Xem menu đầy đủ",
    "flipMenu.loading": "Đang tải menu...",
    "flipMenu.errorLibrary": "Không thể khởi tạo thư viện lật trang.",
    "flipMenu.errorPdf": "Không thể tải file menu. Vui lòng thử lại.",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.combo": "Combo",
    "nav.about": "About Us",
    "nav.testimonials": "Reviews",
    "nav.contact": "Contact",
    "nav.reservation": "Book a Table",

    // Hero
    "hero.badge": "Est. 2018",
    "hero.title": "The Art of Japanese Unagi",
    "hero.subtitle": "Authentic Kabayaki",
    "hero.description":
      "Premium eel imported directly from Japan. Traditional kabayaki grilling with our secret recipe. Fast delivery within 30 minutes.",
    "hero.usp.fresh": "Fresh eel daily",
    "hero.usp.sauce": "Secret tare sauce",
    "hero.usp.delivery": "30-min delivery",
    "hero.cta.menu": "View Menu",
    "hero.cta.book": "Book a Table",
    "hero.scroll": "Discover",

    // About
    "about.label": "Our Story",
    "about.title": "Bringing authentic Japanese unagi to Vietnam",
    "about.p1":
      "Unagista was born from a passion for kabayaki eel rice - the essence of Japanese cuisine. We believe each grilled eel piece is a work of art.",
    "about.p2":
      "Our eels are carefully selected from reputable farms in Japan. The tare sauce is made following a traditional family recipe, aged for years to achieve its signature richness.",
    "about.stat.years": "Years of experience",
    "about.stat.customers": "Happy customers",
    "about.stat.rating": "Average rating",
    "about.stat.dishes": "Signature dishes",

    // Menu
    "menu.label": "Menu",
    "menu.title": "Signature Dishes",
    "menu.description": "Discover our exquisite unagi and Japanese cuisine",
    "menu.all": "All",
    "menu.unagi": "Unagi",
    "menu.set": "Set Meals",
    "menu.side": "Sides",
    "menu.dessert": "Desserts",
    "menu.viewAll": "View Full Menu",

    // Combo
    "combo.badge": "HOT DEAL",
    "combo.title": "Special Combo",
    "combo.discount": "Save 25%",
    "combo.description":
      "Complete premium unagi experience for 2 people. Enjoy everything from unadon, unaju to delicious side dishes.",
    "combo.cta": "Order Combo Now",
    "combo.for2": "For 2 people",

    // Testimonials
    "testimonials.label": "Reviews",
    "testimonials.title": "What Our Customers Say",
    "testimonials.description": "Over 30,000 customers trust and love Unagista",
    "testimonials.reviews": "reviews",

    // Contact
    "contact.label": "Contact",
    "contact.title": "Book Your Table Today",
    "contact.description": "Let us bring you an unforgettable Japanese unagi experience.",
    "contact.hotline": "Hotline",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.hours": "Opening Hours",
    "contact.form.title": "Reservation",
    "contact.form.name": "Full Name",
    "contact.form.phone": "Phone Number",
    "contact.form.date": "Date",
    "contact.form.time": "Time",
    "contact.form.guests": "Guests",
    "contact.form.note": "Notes",
    "contact.form.notePlaceholder": "Special requests (allergies, birthday, etc.)",
    "contact.form.submit": "Book Now",
    "contact.form.submitting": "Processing...",
    "contact.form.success": "Booking Confirmed!",
    "contact.form.successDesc": "We will contact you within 30 minutes to confirm.",

    // Footer
    "footer.menu": "Menu",
    "footer.company": "Company",
    "footer.support": "Support",
    "footer.description":
      "Premium Japanese unagi in Ho Chi Minh City. Each piece of eel is a work of art, prepared with the finest ingredients.",
    "footer.copyright": "© 2026 Unagista. All rights reserved.",

    // FAQ
    "faq.label": "FAQ",
    "faq.title": "Frequently Asked Questions",

    "flipMenu.viewFullMenu": "View Full Menu",
    "flipMenu.loading": "Loading menu...",
    "flipMenu.errorLibrary": "Could not initialize flip book library.",
    "flipMenu.errorPdf": "Could not load menu file. Please try again.",
  },
}

const defaultContextValue: LanguageContextType = {
  language: "vi",
  setLanguage: () => {},
  t: (key: string) => translations.vi[key] || key,
}

const LanguageContext = createContext<LanguageContextType>(defaultContextValue)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("vi")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("unagista-language") as Language
    if (saved && (saved === "vi" || saved === "en")) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("unagista-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  return context
}
