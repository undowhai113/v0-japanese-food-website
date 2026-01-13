"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const faqs = [
  {
    question: "Nhà hàng có nhận đặt tiệc không?",
    answer:
      "Có, Unagi nhận đặt tiệc cho nhóm từ 10-50 người. Vui lòng liên hệ trước ít nhất 3 ngày để chúng tôi chuẩn bị tốt nhất. Chúng tôi có các gói tiệc đa dạng phù hợp với nhiều ngân sách.",
  },
  {
    question: "Nguyên liệu có được nhập khẩu từ Nhật không?",
    answer:
      "Đúng vậy! Các nguyên liệu cao cấp như cá hồi, cá ngừ, wasabi đều được nhập khẩu trực tiếp từ Nhật Bản và các vùng biển nổi tiếng. Chúng tôi đảm bảo độ tươi ngon với quy trình bảo quản lạnh nghiêm ngặt.",
  },
  {
    question: "Có món ăn cho người ăn chay không?",
    answer:
      "Có, chúng tôi có nhiều món chay như Vegetable Tempura, Avocado Roll, Tofu Ramen, và các món salad. Vui lòng thông báo trước khi đặt bàn để đầu bếp chuẩn bị.",
  },
  {
    question: "Phí giao hàng như thế nào?",
    answer:
      "Miễn phí giao hàng cho đơn từ 300.000đ trong bán kính 5km. Đơn hàng ngoài khu vực sẽ tính phí từ 15.000-30.000đ tùy khoảng cách. Thời gian giao hàng trung bình 30-45 phút.",
  },
  {
    question: "Có thể hủy hoặc thay đổi đặt bàn không?",
    answer:
      "Có thể hủy hoặc thay đổi miễn phí trước 2 giờ. Sau thời gian này, vui lòng liên hệ hotline 1900 1234 để được hỗ trợ. Chúng tôi luôn cố gắng linh hoạt nhất có thể.",
  },
  {
    question: "Nhà hàng có chỗ đậu xe không?",
    answer:
      "Có, chúng tôi có bãi đậu xe miễn phí cho khách dùng bữa tại nhà hàng. Sức chứa khoảng 20 xe ô tô và nhiều chỗ cho xe máy. Vui lòng thông báo khi đặt bàn nếu cần chỗ đậu xe.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">FAQ</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Câu hỏi thường gặp
          </h2>
          <p className="text-muted-foreground">Những thắc mắc phổ biến của khách hàng về Unagi</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={staggerItem}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-surface border border-gold-muted rounded-lg px-6 data-[state=open]:border-gold/50"
                >
                  <AccordionTrigger className="text-left hover:text-gold hover:no-underline py-4">
                    <span className="font-medium text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
