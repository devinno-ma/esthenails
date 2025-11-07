"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState } from "react"

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const mainServices = [
    {
      id: "gel-manicure",
      title: "Gel Manicures",
      description: "Long-lasting gel polish manicures that stay vibrant and chip-free for up to 3 weeks.",
      image: "/gel-manicure-1.jpg",
      features: [
        "Premium gel polish selection",
        "Nail shaping and buffing",
        "Cuticle care",
        "Hand massage",
        "Top coat protection",
      ],
      price: "From 250 DH",
    },
    {
      id: "gel-pedicure",
      title: "Gel Pedicures",
      description: "Luxurious gel pedicures with foot spa, exfoliation, and stunning nail designs.",
      image: "/gel-pedicure-1.jpg",
      features: [
        "Foot spa and soak",
        "Exfoliation treatment",
        "Cuticle care",
        "Gel polish application",
        "Foot massage",
      ],
      price: "From 300 DH",
    },
    {
      id: "nail-extensions",
      title: "Nail Extensions",
      description: "Professional acrylic and gel extensions that add length and strength to your natural nails.",
      image: "/nail-extensions-1.jpg",
      features: ["Acrylic extensions", "Gel extensions", "Custom shapes", "Nail art designs", "Maintenance and fills"],
      price: "From 350 DH",
    },
    {
      id: "nail-art",
      title: "Custom Nail Art",
      description: "Bespoke nail art designs tailored to your style, from simple patterns to intricate artwork.",
      image: "/nail-art-design-2.jpg",
      features: [
        "Hand-painted designs",
        "Gems and embellishments",
        "Ombre and gradient effects",
        "Seasonal designs",
        "Special occasion art",
      ],
      price: "From 400 DH",
    },
    {
      id: "dip-powder",
      title: "Dip Powder Nails",
      description: "Durable dip powder manicures that last longer than gel with a natural matte or glossy finish.",
      image: "/dip-powder-nails-1.jpg",
      features: [
        "Dip powder application",
        "Color selection",
        "Nail strengthening",
        "Long-lasting formula",
        "Easy removal",
      ],
      price: "From 280 DH",
    },
    {
      id: "nail-care",
      title: "Nail Care & Treatments",
      description: "Specialized treatments to strengthen, repair, and restore the health of your natural nails.",
      image: "/nail-care-treatment-1.jpg",
      features: [
        "Nail strengthening",
        "Cuticle treatments",
        "Nail repair",
        "Hydration therapy",
        "Personalized care plans",
      ],
      price: "From 150 DH",
    },
  ]

  const additionalServices = [
    {
      title: "Signature Nail Designs",
      description: "Exclusive nail art designs created specifically for ESTHENAILS clients.",
      icon: "✨",
    },
    {
      title: "Express Manicures",
      description: "Quick 30-minute manicures perfect for busy schedules without compromising quality.",
      icon: "⚡",
    },
    {
      title: "Bridal Nail Packages",
      description: "Complete nail packages for weddings and special events with custom designs.",
      icon: "💍",
    },
    {
      title: "Nail Art Consultations",
      description: "Professional advice to help you choose the perfect nail design and colors.",
      icon: "💬",
    },
    {
      title: "Group Bookings",
      description: "Special packages for groups, parties, and celebrations with discounted rates.",
      icon: "👥",
    },
    {
      title: "Loyalty Rewards Program",
      description: "Earn points on every visit and redeem them for discounts and free services.",
      icon: "🎁",
    },
  ]

  const testimonials = [
    {
      text: "The nail art here is absolutely stunning. Every design is a masterpiece and lasts so long!",
      author: "Sara L.",
      role: "Fashion Blogger",
    },
    {
      text: "Professional service with incredible attention to detail. My nails have never looked better.",
      author: "Nadia K.",
      role: "Event Coordinator",
    },
    {
      text: "ESTHENAILS is my go-to place. The team is talented and the atmosphere is so welcoming.",
      author: "Omar B.",
      role: "Graphic Designer",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-10 pb-30 bg-cover bg-center bg-no-repeat md:pb-20 md:pt-10"
        style={{ backgroundImage: "url('/nail-art-design-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-red-medium/60 to-red-light/50 px-0 py-0 my-0" />

        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-lightest via-red-lighter to-transparent rounded-full blur-3xl opacity-60 animate-float" />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-red-light via-red-lighter to-transparent rounded-full blur-3xl opacity-40 animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-lightest rounded-full border border-red-light/50 animate-fade-in">
              <span className="text-xl animate-shimmer">✨</span>
              <span className="text-sm font-medium font-serif text-card">Premium Nail Services</span>
            </div>

            {/* Headline */}
            <h1 className="luxury-text md:text-6xl lg:text-7xl leading-tight text-white text-4xl">
              Elevate Your Nails
              <span className="block text-chart-5">with ESTHENAILS</span>
            </h1>

            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light text-background">
              Explore our expert nail art, gel manicures, pedicures, extensions, and specialized nail care services
              designed to enhance your natural beauty and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-cols-2 md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-6 text-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{service.title}</h2>
                    <p className="text-lg text-foreground">{service.description}</p>
                  </div>

                  <div className="space-y-3 text-left">
                    <h3 className="font-semibold text-foreground">What's Included:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-foreground">
                          <span className="text-primary text-lg">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Link
                      href="/booking"
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all flex md:inline-flex items-center gap-2 group w-full md:w-auto justify-center md:justify-start"
                    >
                      Book Service
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-secondary/50 md:py-10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl font-bold text-foreground mb-4 text-2xl">Premium Nail Services & Experiences</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our signature services designed to elevate your nail care experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl font-bold text-foreground mb-4 text-2xl">
              Premium Nail Services Tailored for You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover heartfelt reviews from our clients who love their stunning nails and the confidence ESTHENAILS
              brings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg">
                <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Nails?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the ESTHENAILS difference.
          </p>
          <Link
            href="/booking"
            className="flex md:inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105 w-full md:w-auto justify-center"
          >
            Book Now
            <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
