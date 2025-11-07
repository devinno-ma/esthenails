"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.subject && formData.message) {
      setIsSubmitted(true)
      console.log(formData)
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" })
        setIsSubmitted(false)
      }, 3000)
    }
  }

  const contactInfo = [
    {
      icon: "📍",
      label: "Address",
      value: "27 Rue de la Liberté, Marrakech",
      subvalue: "45 Avenue Hassan II, Marrakech",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+212-524-123-456",
      subvalue: "Available 9 AM - 6 PM",
    },
    {
      icon: "✉️",
      label: "Email",
      value: "contact@ohmynails.ma",
      subvalue: "We'll respond within 24 hours",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden md:pt-10 md:pb-10 bg-cover bg-center bg-no-repeat pb-10 pt-5"
        style={{ backgroundImage: "url('/luxury-nail-art-design.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-red-medium/60 to-red-light/50 my-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 animate-fade-in">
              <span className="text-xl text-white animate-shimmer">✉️</span>
              <span className="text-sm font-medium text-white font-serif">Get in Touch</span>
            </div>

            {/* Headline */}
            <h1 className="luxury-text md:text-6xl lg:text-7xl leading-tight text-white text-4xl">
              Let's Connect
              <span className="block text-white">Together</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-normal">
              Have questions about our nail services? We'd love to hear from you. Contact Oh! My Nails today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{info.label}</h3>
                <p className="text-foreground font-semibold mb-1">{info.value}</p>
                <p className="text-sm text-muted-foreground">{info.subvalue}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✉️</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>✉️</span>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="md:py-32 bg-secondary/50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Visit Us</h2>
          <div className="bg-muted rounded-2xl overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.8169384891!2d-8.009!3d31.6295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee5d0d0d0d0d%3A0x0!2sMarrakech%2C%20Morocco!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
