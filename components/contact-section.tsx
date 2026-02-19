"use client"

import React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="pt-10 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-3 sm:mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Side-by-Side Layout */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 max-w-6xl mx-auto">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {/* Address */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gray-200 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-base sm:text-lg mb-1">{t("contact.address_title")}</h4>
                <p className="text-sm sm:text-base text-muted-foreground">{t("contact.address")}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gray-200 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-base sm:text-lg mb-1">{t("contact.form_phone")}</h4>
                <p className="text-sm sm:text-base text-muted-foreground" dir="ltr">+218 91 0340420</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gray-200 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-base sm:text-lg mb-1">{t("contact.email_label")}</h4>
                <p className="text-sm sm:text-base text-muted-foreground">info@amanalghad.com</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-muted/80 rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-8">
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center py-12 sm:py-16">
                <div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                    {t("contact.success")}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {t("contact.subtitle")}
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-5 sm:mt-6 rounded-full bg-transparent"
                    onClick={() => setSubmitted(false)}
                  >
                    {t("contact.form_submit")}
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground text-sm sm:text-base">{t("contact.form_name")}</Label>
                    <Input id="name" required className="h-11 sm:h-12 bg-white border-0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground text-sm sm:text-base">{t("contact.form_company")}</Label>
                    <Input id="company" required className="h-11 sm:h-12 bg-white border-0" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground text-sm sm:text-base">{t("contact.form_phone")}</Label>
                    <Input id="phone" type="tel" required className="h-11 sm:h-12 bg-white border-0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground text-sm sm:text-base">{t("contact.form_email")}</Label>
                    <Input id="email" type="email" required className="h-11 sm:h-12 bg-white border-0" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground text-sm sm:text-base">{t("contact.form_message")}</Label>
                  <Textarea id="message" rows={5} required className="bg-white border-0 resize-none" />
                </div>

                <Button type="submit" className="w-full h-11 sm:h-12 rounded-full text-sm sm:text-base" disabled={isSubmitting}>
                  {isSubmitting ? "..." : t("contact.form_submit")}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
