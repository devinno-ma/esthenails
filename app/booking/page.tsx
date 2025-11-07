"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar } from "@/components/calendar"
import { TimePicker } from "@/components/time-picker"
import { useState } from "react"
import Link from "next/link"

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    { id: "gel-manicure", name: "Gel Manicure", price: "250 DH", duration: "1.5 hours" },
    { id: "gel-pedicure", name: "Gel Pedicure", price: "300 DH", duration: "2 hours" },
    { id: "nail-extensions", name: "Nail Extensions", price: "350 DH", duration: "2-3 hours" },
    { id: "nail-art", name: "Custom Nail Art", price: "400 DH", duration: "2 hours" },
    { id: "dip-powder", name: "Dip Powder Nails", price: "280 DH", duration: "1.5 hours" },
    { id: "nail-care", name: "Nail Care Treatment", price: "150 DH", duration: "1 hour" },
  ]

  // Mock booked dates and times
  const bookedDates = ["2025-01-15", "2025-01-20", "2025-01-25"]
  const bookedTimes = ["09:00", "14:00", "17:00"]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedDate && selectedTime && selectedService && formData.name && formData.email && formData.phone) {
      setIsSubmitted(true)
      console.log({
        date: selectedDate,
        time: selectedTime,
        service: selectedService,
        ...formData,
      })
    }
  }

  const isFormValid =
    selectedDate && selectedTime && selectedService && formData.name && formData.email && formData.phone

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">✓</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground">Booking Confirmed!</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thank you for booking with ESTHENAILS. We've sent a confirmation email to {formData.email}. We look
              forward to seeing you!
            </p>
            <div className="bg-card rounded-2xl p-8 text-left space-y-4 mt-8">
              <div>
                <p className="text-sm text-muted-foreground">Service</p>
                <p className="text-lg font-semibold text-foreground">
                  {services.find((s) => s.id === selectedService)?.name}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date & Time</p>
                <p className="text-lg font-semibold text-foreground">
                  {selectedDate?.toLocaleDateString()} at {selectedTime}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="text-lg font-semibold text-foreground">
                  {services.find((s) => s.id === selectedService)?.duration}
                </p>
              </div>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all mt-8"
            >
              Back to Home
              <span>→</span>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-10 md:pb-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/luxury-nail-art-design.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-red-medium/60 to-red-light/50 my-0" />

        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-lightest via-red-lighter to-transparent rounded-full blur-3xl opacity-60 animate-float my-0" />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-red-light via-red-lighter to-transparent rounded-full blur-3xl opacity-40 animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 animate-fade-in">
              <span className="text-xl text-white animate-shimmer">📅</span>
              <span className="text-sm font-medium text-white font-serif">Reserve Your Slot</span>
            </div>

            {/* Headline */}
            <h1 className="luxury-text md:text-6xl lg:text-7xl leading-tight text-white text-4xl">
              Book Your
              <span className="block text-white">Nail Appointment</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Select your preferred nail service, date, and time to book your appointment with ESTHENAILS.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="md:py-2 md:pt-5 md:pb-5 py-16 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Service Selection */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">1. Select Service</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedService(service.id)}
                    className={`p-6 rounded-2xl border-2 transition-all text-left ${
                      selectedService === service.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <h3 className="font-bold text-foreground mb-2">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{service.duration}</p>
                    <p className="text-lg font-semibold text-primary">{service.price}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time Selection */}
            {selectedService && (
              <div className="space-y-6 animate-slide-up">
                <h2 className="text-2xl font-bold text-foreground">2. Select Date & Time</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Calendar onDateSelect={setSelectedDate} selectedDate={selectedDate} bookedDates={bookedDates} />
                  <TimePicker onTimeSelect={setSelectedTime} selectedTime={selectedTime} bookedTimes={bookedTimes} />
                </div>
              </div>
            )}

            {/* Personal Information */}
            {selectedService && selectedDate && selectedTime && (
              <div className="space-y-6 animate-slide-up">
                <h2 className="text-2xl font-bold text-foreground">3. Your Information</h2>
                <div className="bg-card rounded-2xl p-8 shadow-lg space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
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
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+212 6XX XXX XXX"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Booking Summary */}
            {selectedService && selectedDate && selectedTime && (
              <div className="bg-secondary/50 rounded-2xl p-8 space-y-4 animate-slide-up">
                <h3 className="text-lg font-bold text-foreground">Booking Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service:</span>
                    <span className="font-semibold text-foreground">
                      {services.find((s) => s.id === selectedService)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="font-semibold text-foreground">{selectedDate?.toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time:</span>
                    <span className="font-semibold text-foreground">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-border">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-bold text-primary">
                      {services.find((s) => s.id === selectedService)?.price}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            {isFormValid && (
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:shadow-lg animate-slide-up"
              >
                Confirm Booking
              </button>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
