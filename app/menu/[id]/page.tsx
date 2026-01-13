import { notFound } from "next/navigation"
import { MenuDetailClient } from "@/components/pages/menu-detail-client"

const menuItemsFullData = [
  {
    id: "1",
    slug: "unaju-dac-biet",
    name: { vi: "Unaju Đặc Biệt", en: "Premium Unaju" },
    description: {
      vi: "Cơm lươn nướng kabayaki cao cấp, lươn Nhật tươi sống, sốt tare gia truyền",
      en: "Premium grilled eel kabayaki, fresh Japanese eel, traditional tare sauce",
    },
    longDescription: {
      vi: "Unaju Đặc Biệt là món ăn signature của Unagista, được chế biến từ lươn Nhật tươi sống nhập khẩu trực tiếp từ các trang trại uy tín tại Nhật Bản. Lươn được nướng kabayaki truyền thống trên than hoa, tẩm sốt tare bí quyết gia truyền qua nhiều thế hệ. Cơm Nhật dẻo thơm được nấu trong nồi đất, rắc sansho tạo hương vị đặc trưng. Món ăn được phục vụ trong hộp lacquer truyền thống, mang đến trải nghiệm ẩm thực đích thực.",
      en: "Premium Unaju is Unagista's signature dish, prepared with fresh Japanese eel imported directly from reputable farms in Japan. The eel is grilled kabayaki-style over charcoal, glazed with our secret family tare sauce passed down through generations. Fluffy Japanese rice is cooked in a clay pot and topped with sansho pepper for its distinctive flavor. The dish is served in a traditional lacquer box, offering an authentic culinary experience.",
    },
    price: 450000,
    originalPrice: 550000,
    category: "unagi",
    image: "/premium-unaju-grilled-eel-rice-lacquer-box-japanes.jpg",
    gallery: [
      "/premium-unaju-grilled-eel-rice-lacquer-box-japanes.jpg",
      "/unaju-top-view-grilled-eel-rice-japanese-food.jpg",
      "/grilled-unagi-eel-close-up-golden-glazed-kabayaki.jpg",
      "/unaju-set-with-miso-soup-pickles-japanese-meal.jpg",
    ],
    badge: { vi: "Bán chạy", en: "Best Seller" },
    rating: 4.9,
    reviewCount: 324,
    isHot: true,
    ingredients: {
      vi: ["Lươn Nhật tươi sống", "Cơm Nhật Koshihikari", "Sốt tare gia truyền", "Sansho", "Nori", "Gừng ngâm"],
      en: [
        "Fresh Japanese eel",
        "Koshihikari Japanese rice",
        "Traditional tare sauce",
        "Sansho pepper",
        "Nori seaweed",
        "Pickled ginger",
      ],
    },
    nutrition: {
      calories: 650,
      protein: 32,
      carbs: 78,
      fat: 24,
    },
    allergens: { vi: ["Cá", "Đậu nành", "Gluten"], en: ["Fish", "Soy", "Gluten"] },
    preparationTime: "15-20 phút",
    servingSize: "1 người",
  },
  {
    id: "2",
    slug: "unadon-truyen-thong",
    name: { vi: "Unadon Truyền Thống", en: "Traditional Unadon" },
    description: {
      vi: "Cơm lươn đặt trên cơm Nhật dẻo thơm, rắc sansho",
      en: "Grilled eel on fluffy Japanese rice, topped with sansho pepper",
    },
    longDescription: {
      vi: "Unadon là món cơm lươn truyền thống của Nhật Bản, với miếng lươn nướng kabayaki đặt trên nền cơm Nhật dẻo thơm. Sốt tare ngọt mặn được rưới đều, kết hợp với hương vị đặc trưng của sansho tạo nên một hương vị hoàn hảo. Món ăn đơn giản nhưng tinh tế, thể hiện tinh hoa ẩm thực Nhật Bản.",
      en: "Unadon is a traditional Japanese eel rice bowl, featuring kabayaki-grilled eel placed on fluffy Japanese rice. The sweet and savory tare sauce is drizzled evenly, combined with the distinctive flavor of sansho pepper to create a perfect taste. Simple yet refined, this dish represents the essence of Japanese cuisine.",
    },
    price: 320000,
    category: "unagi",
    image: "/unadon-grilled-eel-rice-bowl-traditional-japanese-.jpg",
    gallery: ["/unadon-grilled-eel-rice-bowl-traditional-japanese-.jpg", "/unadon-side-view-eel-rice-japanese-food.jpg", "/placeholder.svg?height=600&width=600"],
    badge: { vi: "Đặc biệt", en: "Special" },
    rating: 4.8,
    reviewCount: 256,
    isHot: true,
    ingredients: {
      vi: ["Lươn Nhật", "Cơm Nhật", "Sốt tare", "Sansho", "Nori"],
      en: ["Japanese eel", "Japanese rice", "Tare sauce", "Sansho pepper", "Nori"],
    },
    nutrition: {
      calories: 520,
      protein: 28,
      carbs: 65,
      fat: 18,
    },
    allergens: { vi: ["Cá", "Đậu nành"], en: ["Fish", "Soy"] },
    preparationTime: "12-15 phút",
    servingSize: "1 người",
  },
  {
    id: "3",
    slug: "hitsumabushi",
    name: { vi: "Hitsumabushi", en: "Hitsumabushi" },
    description: {
      vi: "Cơm lươn Nagoya 3 cách thưởng thức: nguyên bản, với gia vị, với nước dùng",
      en: "Nagoya-style eel rice with 3 ways to enjoy: original, with condiments, with broth",
    },
    longDescription: {
      vi: "Hitsumabushi là đặc sản của vùng Nagoya, Nhật Bản. Món ăn độc đáo này cho phép bạn thưởng thức cơm lươn theo 3 cách khác nhau: đầu tiên là ăn nguyên bản để cảm nhận vị ngọt của lươn và sốt tare; thứ hai là thêm hành lá, wasabi và nori để tăng hương vị; và cuối cùng là chan nước dùng dashi nóng hổi để tạo thành ochazuke.",
      en: "Hitsumabushi is a specialty from Nagoya, Japan. This unique dish allows you to enjoy eel rice in 3 different ways: first, eat it plain to savor the sweetness of eel and tare sauce; second, add green onions, wasabi, and nori to enhance the flavor; and finally, pour hot dashi broth to create ochazuke.",
    },
    price: 520000,
    category: "unagi",
    image: "/placeholder.svg?height=600&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    rating: 4.9,
    reviewCount: 189,
    ingredients: {
      vi: ["Lươn Nhật", "Cơm Nhật", "Sốt tare", "Nước dùng dashi", "Hành lá", "Wasabi", "Nori", "Sansho"],
      en: ["Japanese eel", "Japanese rice", "Tare sauce", "Dashi broth", "Green onions", "Wasabi", "Nori", "Sansho"],
    },
    nutrition: {
      calories: 680,
      protein: 35,
      carbs: 82,
      fat: 22,
    },
    allergens: { vi: ["Cá", "Đậu nành", "Gluten"], en: ["Fish", "Soy", "Gluten"] },
    preparationTime: "18-22 phút",
    servingSize: "1 người",
  },
  {
    id: "4",
    slug: "unagi-sashimi",
    name: { vi: "Unagi Sashimi", en: "Unagi Sashimi" },
    description: {
      vi: "Lươn sống thái lát mỏng, ăn kèm wasabi và nước tương",
      en: "Thinly sliced raw eel, served with wasabi and soy sauce",
    },
    longDescription: {
      vi: "Unagi Sashimi là cách thưởng thức lươn tinh tế nhất, cho phép bạn cảm nhận trọn vẹn hương vị tự nhiên của lươn Nhật cao cấp. Lươn được thái lát mỏng, bày trí đẹp mắt trên đĩa, ăn kèm wasabi tươi và nước tương Nhật đặc biệt.",
      en: "Unagi Sashimi is the most refined way to enjoy eel, allowing you to fully appreciate the natural flavor of premium Japanese eel. The eel is thinly sliced, beautifully presented on a plate, served with fresh wasabi and special Japanese soy sauce.",
    },
    price: 280000,
    category: "sashimi",
    image: "/placeholder.svg?height=600&width=600",
    gallery: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    rating: 4.7,
    reviewCount: 98,
    ingredients: {
      vi: ["Lươn Nhật tươi sống", "Wasabi", "Nước tương Nhật", "Củ cải trắng", "Lá tía tô"],
      en: ["Fresh Japanese eel", "Wasabi", "Japanese soy sauce", "Daikon radish", "Shiso leaves"],
    },
    nutrition: {
      calories: 220,
      protein: 24,
      carbs: 5,
      fat: 12,
    },
    allergens: { vi: ["Cá", "Đậu nành"], en: ["Fish", "Soy"] },
    preparationTime: "8-10 phút",
    servingSize: "1 người",
  },
  {
    id: "5",
    slug: "set-com-luon-sashimi",
    name: { vi: "Set Cơm Lươn & Sashimi", en: "Eel Rice & Sashimi Set" },
    description: {
      vi: "Combo hoàn hảo: Unadon + Unagi Sashimi + Súp miso + Rau củ ngâm",
      en: "Perfect combo: Unadon + Unagi Sashimi + Miso soup + Pickled vegetables",
    },
    longDescription: {
      vi: "Set Cơm Lươn & Sashimi là lựa chọn hoàn hảo cho những ai muốn trải nghiệm đầy đủ hương vị lươn Nhật. Set bao gồm một phần Unadon truyền thống, một đĩa Unagi Sashimi tươi ngon, súp miso ấm nóng và rau củ ngâm thanh mát.",
      en: "The Eel Rice & Sashimi Set is the perfect choice for those who want to experience the full flavor of Japanese eel. The set includes a traditional Unadon, a plate of fresh Unagi Sashimi, warm miso soup, and refreshing pickled vegetables.",
    },
    price: 480000,
    originalPrice: 580000,
    category: "set",
    image: "/placeholder.svg?height=600&width=600",
    gallery: ["/placeholder.svg?height=600&width=600", "/placeholder.svg?height=600&width=600"],
    badge: { vi: "Tiết kiệm", en: "Value" },
    rating: 4.8,
    reviewCount: 167,
    ingredients: {
      vi: ["Lươn Nhật", "Cơm Nhật", "Sốt tare", "Đậu hũ", "Rong biển wakame", "Củ cải ngâm"],
      en: ["Japanese eel", "Japanese rice", "Tare sauce", "Tofu", "Wakame seaweed", "Pickled radish"],
    },
    nutrition: {
      calories: 780,
      protein: 42,
      carbs: 85,
      fat: 28,
    },
    allergens: { vi: ["Cá", "Đậu nành", "Gluten"], en: ["Fish", "Soy", "Gluten"] },
    preparationTime: "15-18 phút",
    servingSize: "1 người",
  },
]

export async function generateStaticParams() {
  return menuItemsFullData.map((item) => ({
    id: item.id,
  }))
}

export default async function MenuDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const menuItem = menuItemsFullData.find((item) => item.id === id)

  if (!menuItem) {
    notFound()
  }

  return <MenuDetailClient item={menuItem} allItems={menuItemsFullData} />
}
