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
    <section id="contact" className="pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-20 lg:pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {t("contact.subtitle")}
          </p>
        </div>

        {/* Side-by-Side Layout */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-10">
            {/* Address */}
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-1">{t("contact.address_title")}</h4>
                  <p className="text-muted-foreground">{t("contact.address")}</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-1">{t("contact.form_phone")}</h4>
                  <p className="text-muted-foreground" dir="ltr">+218 91 0340420</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-1">{t("contact.email_label")}</h4>
                  <p className="text-muted-foreground">info@amanalghad.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-muted/80 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10">
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center py-16">
                <div>
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {t("contact.success")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("contact.subtitle")}
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6 rounded-full bg-transparent"
                    onClick={() => setSubmitted(false)}
                  >
                    {t("contact.form_submit")}
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">{t("contact.form_name")}</Label>
                    <Input id="name" required className="h-12 bg-white border-0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">{t("contact.form_company")}</Label>
                    <Input id="company" required className="h-12 bg-white border-0" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">{t("contact.form_phone")}</Label>
                    <Input id="phone" type="tel" required className="h-12 bg-white border-0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">{t("contact.form_email")}</Label>
                    <Input id="email" type="email" required className="h-12 bg-white border-0" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">{t("contact.form_message")}</Label>
                  <Textarea id="message" rows={5} required className="bg-white border-0 resize-none" />
                </div>

                <Button type="submit" className="w-full h-12 rounded-full text-base" disabled={isSubmitting}>
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
