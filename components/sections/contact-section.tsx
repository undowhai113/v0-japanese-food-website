"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Phone, Mail, MapPin, Clock, Send, Calendar, Users, CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { useLanguage } from "@/components/language-provider"

const reservationSchema = z.object({
  name: z.string().min(2, "Vui lòng nhập họ tên"),
  phone: z.string().min(10, "Số điện thoại không hợp lệ"),
  email: z.string().email("Email không hợp lệ").optional().or(z.literal("")),
  date: z.string().min(1, "Vui lòng chọn ngày"),
  time: z.string().min(1, "Vui lòng chọn giờ"),
  guests: z.string().min(1, "Vui lòng chọn số người"),
  note: z.string().optional(),
})

type ReservationFormData = z.infer<typeof reservationSchema>

const timeSlots = [
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
]

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"]

export function ContactSection() {
  const { t } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    { icon: Phone, label: t("contact.hotline"), value: "0908.79.2289", href: "tel:0908792289" },
    { icon: Mail, label: t("contact.email"), value: "Service@unagi.vn", href: "mailto:Service@unagi.vn" },
    { icon: MapPin, label: t("contact.address"), value: "6A Thái Văn Lung, Phường Sài Gòn, TP. HCM", href: "https://maps.app.goo.gl/tV9rE5v9Xf9mX1X99" },
    { icon: Clock, label: t("contact.hours"), value: "11:00 - 21:30", href: "#" },
  ]

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  })

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Reservation data:", data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Contact Info */}
          <motion.div variants={staggerItem}>
            <span className="inline-block text-gold text-sm font-medium tracking-widest uppercase mb-4">
              {t("contact.label")}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">{t("contact.description")}</p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-background border border-gold-muted hover:border-gold/50 transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map Embed */}
            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4225781037258!2d106.7051242!3d10.7789112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f138e315263%3A0xdfbd3e56fc9db82d!2sUNAGI%20STATION%20-%20Premium%20Japanese%20Unagi!5e0!3m2!1svi!2s!4v1770624501187!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Unagista Location"
              />
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div variants={staggerItem}>
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-gold-muted shadow-lg">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">{t("contact.form.title")}</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-foreground mb-2">{t("contact.form.success")}</h4>
                  <p className="text-muted-foreground">{t("contact.form.successDesc")}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("contact.form.name")} *</Label>
                    <Input
                      id="name"
                      placeholder="Nguyễn Văn A"
                      {...register("name")}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t("contact.form.phone")} *</Label>
                    <Input
                      id="phone"
                      placeholder="0901 234 567"
                      {...register("phone")}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                  </div>

                  {/* Date & Time */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">{t("contact.form.date")} *</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="date"
                          type="date"
                          {...register("date")}
                          className={`pl-10 ${errors.date ? "border-destructive" : ""}`}
                        />
                      </div>
                      {errors.date && <p className="text-sm text-destructive">{errors.date.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">{t("contact.form.time")} *</Label>
                      <Select onValueChange={(value) => setValue("time", value)}>
                        <SelectTrigger className={errors.time ? "border-destructive" : ""}>
                          <SelectValue placeholder="--:--" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.time && <p className="text-sm text-destructive">{errors.time.message}</p>}
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="space-y-2">
                    <Label htmlFor="guests">{t("contact.form.guests")} *</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none z-10" />
                      <Select onValueChange={(value) => setValue("guests", value)}>
                        <SelectTrigger className={`pl-10 ${errors.guests ? "border-destructive" : ""}`}>
                          <SelectValue placeholder="--" />
                        </SelectTrigger>
                        <SelectContent>
                          {guestOptions.map((guest) => (
                            <SelectItem key={guest} value={guest}>
                              {guest}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {errors.guests && <p className="text-sm text-destructive">{errors.guests.message}</p>}
                  </div>

                  {/* Note */}
                  <div className="space-y-2">
                    <Label htmlFor="note">{t("contact.form.note")}</Label>
                    <Textarea
                      id="note"
                      placeholder={t("contact.form.notePlaceholder")}
                      rows={3}
                      {...register("note")}
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-background hover:bg-gold/90 font-medium"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {t("contact.form.submitting")}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t("contact.form.submit")}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
