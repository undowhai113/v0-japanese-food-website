import { notFound } from "next/navigation"
import { BlogDetailClient } from "@/components/pages/blog-detail-client"

const blogPostsFullData = [
  {
    id: "1",
    slug: "bi-quyet-nuong-luon-kabayaki",
    title: {
      vi: "Bí quyết nướng lươn Kabayaki hoàn hảo",
      en: "Secrets to Perfect Kabayaki Grilling",
    },
    excerpt: {
      vi: "Khám phá kỹ thuật nướng lươn kabayaki truyền thống của Nhật Bản.",
      en: "Discover traditional Japanese kabayaki eel grilling techniques.",
    },
    content: {
      vi: `
## Giới thiệu

Kabayaki là phương pháp nướng lươn truyền thống của Nhật Bản, được phát triển từ thời Edo (1603-1868). Kỹ thuật này đòi hỏi sự tỉ mỉ và kiên nhẫn, nhưng kết quả cuối cùng là những miếng lươn nướng vàng óng, thơm ngon khó cưỡng.

## Chuẩn bị nguyên liệu

### Chọn lươn
- Chọn lươn tươi sống, da bóng mượt
- Trọng lượng lý tưởng: 200-300g/con
- Thịt lươn phải săn chắc, không có mùi tanh

### Sốt Tare
- Nước tương Nhật: 200ml
- Mirin: 150ml
- Sake: 100ml
- Đường: 80g

## Kỹ thuật nướng

1. **Xử lý lươn**: Làm sạch, bỏ nội tạng, fillet theo kiểu Kanto hoặc Kansai
2. **Hấp sơ** (kiểu Tokyo): Hấp 10-15 phút để lươn mềm
3. **Nướng than**: Nướng trên than hoa ở nhiệt độ vừa
4. **Tẩm sốt**: Tẩm sốt tare 3-4 lần trong quá trình nướng

## Lời khuyên từ Chef

> "Bí quyết của kabayaki hoàn hảo nằm ở việc kiểm soát nhiệt độ và thời điểm tẩm sốt. Sốt tare cần được tẩm đúng lúc để thấm vào thịt lươn mà không bị cháy."
> 
> — Chef Tanaka
      `,
      en: `
## Introduction

Kabayaki is a traditional Japanese eel grilling method developed during the Edo period (1603-1868). This technique requires meticulousness and patience, but the end result is beautifully golden-grilled eel with irresistible flavor.

## Preparing Ingredients

### Selecting Eel
- Choose live fresh eel with glossy skin
- Ideal weight: 200-300g per eel
- The flesh should be firm with no fishy smell

### Tare Sauce
- Japanese soy sauce: 200ml
- Mirin: 150ml
- Sake: 100ml
- Sugar: 80g

## Grilling Technique

1. **Prepare the eel**: Clean, remove innards, fillet in Kanto or Kansai style
2. **Pre-steam** (Tokyo style): Steam for 10-15 minutes to soften
3. **Charcoal grilling**: Grill over charcoal at medium heat
4. **Glaze with sauce**: Apply tare sauce 3-4 times during grilling

## Chef's Tips

> "The secret to perfect kabayaki lies in controlling the temperature and timing of the glaze. The tare sauce needs to be applied at the right moment to penetrate the eel without burning."
> 
> — Chef Tanaka
      `,
    },
    image: "/placeholder.svg?height=600&width=1000",
    category: { vi: "Kỹ thuật", en: "Technique" },
    author: "Chef Tanaka",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "2026-01-10",
    readTime: { vi: "5 phút", en: "5 min" },
    tags: { vi: ["Kabayaki", "Nướng lươn", "Kỹ thuật"], en: ["Kabayaki", "Grilling", "Technique"] },
  },
  {
    id: "2",
    slug: "lich-su-mon-unadon",
    title: {
      vi: "Lịch sử và nguồn gốc món Unadon",
      en: "History and Origins of Unadon",
    },
    excerpt: {
      vi: "Tìm hiểu về lịch sử hơn 200 năm của món cơm lươn Unadon.",
      en: "Learn about the 200+ year history of Unadon eel rice.",
    },
    content: {
      vi: `
## Nguồn gốc từ thời Edo

Unadon (鰻丼) ra đời vào khoảng năm 1800, trong thời kỳ Edo. Theo truyền thuyết, món ăn này được sáng tạo bởi một thương nhân giàu có tên Ōkubo Imabei tại khu vực Nihonbashi, Tokyo.

## Sự phát triển qua các thời kỳ

### Thời Edo (1603-1868)
- Unadon ban đầu là món ăn của giới thượng lưu
- Các quán unagi đầu tiên xuất hiện dọc sông Sumida

### Thời Meiji (1868-1912)
- Unadon trở nên phổ biến hơn với tầng lớp trung lưu
- Kỹ thuật nuôi lươn bắt đầu phát triển

### Thời hiện đại
- Unadon trở thành món ăn quốc dân của Nhật Bản
- Ngày "Doyo no Ushi" - ngày ăn lươn truyền thống

## Ý nghĩa văn hóa

Lươn được người Nhật tin rằng mang lại sức khỏe và năng lượng, đặc biệt trong những ngày hè nóng bức. Đây là lý do tại sao ngày "Doyo no Ushi" (thường rơi vào tháng 7-8) trở thành ngày ăn lươn truyền thống.
      `,
      en: `
## Origins from the Edo Period

Unadon (鰻丼) was created around 1800, during the Edo period. According to legend, this dish was invented by a wealthy merchant named Ōkubo Imabei in the Nihonbashi area of Tokyo.

## Development Through the Ages

### Edo Period (1603-1868)
- Unadon was initially a dish for the upper class
- The first unagi restaurants appeared along the Sumida River

### Meiji Period (1868-1912)
- Unadon became more popular among the middle class
- Eel farming techniques began to develop

### Modern Era
- Unadon has become a national dish of Japan
- "Doyo no Ushi" day - traditional eel eating day

## Cultural Significance

The Japanese believe eel brings health and energy, especially during hot summer days. This is why "Doyo no Ushi" day (usually in July-August) has become a traditional day for eating eel.
      `,
    },
    image: "/placeholder.svg?height=600&width=1000",
    category: { vi: "Văn hóa", en: "Culture" },
    author: "Minh Anh",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "2026-01-08",
    readTime: { vi: "7 phút", en: "7 min" },
    tags: { vi: ["Unadon", "Lịch sử", "Văn hóa Nhật"], en: ["Unadon", "History", "Japanese Culture"] },
  },
  {
    id: "3",
    slug: "cach-thuong-thuc-hitsumabushi",
    title: {
      vi: "3 cách thưởng thức Hitsumabushi đúng điệu",
      en: "3 Ways to Enjoy Hitsumabushi Properly",
    },
    excerpt: {
      vi: "Hướng dẫn chi tiết cách thưởng thức món Hitsumabushi theo phong cách Nagoya.",
      en: "Detailed guide on how to enjoy Hitsumabushi in traditional Nagoya style.",
    },
    content: {
      vi: `
## Hitsumabushi là gì?

Hitsumabushi (ひつまぶし) là đặc sản của vùng Nagoya, Nhật Bản. Khác với Unadon thông thường, Hitsumabushi được thiết kế để thưởng thức theo 3 cách khác nhau.

## 3 cách thưởng thức

### Cách 1: Ăn nguyên bản
Chia cơm lươn thành 4 phần. Phần đầu tiên, hãy ăn nguyên bản để cảm nhận hương vị thuần túy của lươn nướng và sốt tare.

### Cách 2: Thêm gia vị
Phần thứ hai, thêm các gia vị như:
- Hành lá thái nhỏ
- Wasabi
- Nori vụn

### Cách 3: Chan nước dùng
Phần thứ ba, chan nước dùng dashi nóng hổi để tạo thành món ochazuke - cơm chan nước dùng truyền thống.

### Phần cuối cùng
Phần còn lại, bạn có thể ăn theo cách mình thích nhất!
      `,
      en: `
## What is Hitsumabushi?

Hitsumabushi (ひつまぶし) is a specialty from Nagoya, Japan. Unlike regular Unadon, Hitsumabushi is designed to be enjoyed in 3 different ways.

## 3 Ways to Enjoy

### Way 1: Plain
Divide the eel rice into 4 portions. For the first portion, eat it plain to appreciate the pure flavor of grilled eel and tare sauce.

### Way 2: With Condiments
For the second portion, add condiments such as:
- Chopped green onions
- Wasabi
- Shredded nori

### Way 3: With Broth
For the third portion, pour hot dashi broth to create ochazuke - traditional rice with broth.

### Final Portion
For the last portion, eat it whichever way you enjoyed most!
      `,
    },
    image: "/placeholder.svg?height=600&width=1000",
    category: { vi: "Hướng dẫn", en: "Guide" },
    author: "Chef Tanaka",
    authorImage: "/placeholder.svg?height=100&width=100",
    date: "2026-01-05",
    readTime: { vi: "4 phút", en: "4 min" },
    tags: { vi: ["Hitsumabushi", "Nagoya", "Hướng dẫn"], en: ["Hitsumabushi", "Nagoya", "Guide"] },
  },
]

export async function generateStaticParams() {
  return blogPostsFullData.map((post) => ({
    id: post.id,
  }))
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = blogPostsFullData.find((p) => p.id === id)

  if (!post) {
    notFound()
  }

  return <BlogDetailClient post={post} allPosts={blogPostsFullData} />
}
