"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "Sara El Haffid",
      role: "Lead Nail Artist",
      bio: "With 12 years of experience, Sara specializes in intricate nail art designs and custom creations.",
      image: "/team-member-1.jpg",
    },
    {
      name: "Laila Bourid",
      role: "Gel Specialist",
      bio: "Expert in gel manicures and pedicures, Laila ensures flawless finishes every time.",
      image: "/laila-bourid.jpg",
    },
    {
      name: "Youssef Benali",
      role: "Nail Extensions Expert",
      bio: "Passionate about creating beautiful nail extensions with precision and artistry.",
      image: "/team-member-3.jpg",
    },
    {
      name: "Karimi Aziz",
      role: "Nail Care Specialist",
      bio: "Dedicated to nail health and wellness, providing specialized treatments and consultations.",
      image: "/karimi-aziz.jpg",
    },
  ]

  const testimonials = [
    {
      text: "The nail art here is absolutely stunning! Every design is a masterpiece and lasts so long.",
      author: "Sara M.",
      role: "Fashion Blogger",
    },
    {
      text: "Professional service with incredible attention to detail. My nails have never looked better!",
      author: "Nadia K.",
      role: "Event Coordinator",
    },
    {
      text: "Oh! My Nails is my go-to place. The team is talented and the atmosphere is so welcoming.",
      author: "Leila K.",
      role: "Event Planner",
    },
    {
      text: "From start to finish, the service was impeccable—boosting my confidence with every detail perfected.",
      author: "Hasan T.",
      role: "Photographer",
    },
  ]

  const stats = [
    { icon: "👥", label: "Happy Clients", value: "500+" },
    { icon: "🏆", label: "Years Experience", value: "10+" },
    { icon: "⭐", label: "5-Star Reviews", value: "98%" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden md:pt-10 md:pb-10 bg-cover bg-center bg-no-repeat pb-10 pt-10"
        style={{
          backgroundImage: "url('/nail-art-design-1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-red-medium/60 to-red-light/50 my-0" />

        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-lightest via-red-lighter to-transparent rounded-full blur-3xl opacity-60 animate-float my-14" />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-red-light via-red-lighter to-transparent rounded-full blur-3xl opacity-40 animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-lightest rounded-full border border-red-light/50 animate-fade-in">
              <span className="text-xl animate-shimmer">✨</span>
              <span className="text-sm font-medium font-serif text-background">Our Story</span>
            </div>

            {/* Headline */}
            <h1 className="luxury-text md:text-6xl lg:text-7xl leading-tight text-white text-4xl">
              Discover Your
              <span className="block text-secondary">Nail Perfection</span>
            </h1>

            <p className="md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed text-base font-normal">
              At Oh! My Nails, we are dedicated to empowering confidence through beautiful nail art. Our mission is to
              provide expert nail services that elevate your style while embracing creativity and personalized care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="md:py-10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img src="/gel-manicure-1.jpg" alt="About Oh! My Nails" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="md:text-4xl font-bold text-foreground text-2xl">
                Premium Nail Art That Elevates Your Confidence
              </h2>
              <p className="text-lg text-foreground">
                Meet the skilled professionals dedicated to creating stunning nail designs and experiences.
              </p>
              <p className="text-muted-foreground">
                At Oh! My Nails, we believe that beautiful nails are more than just appearance—they're about feeling
                confident and empowered. Our team of expert nail technicians is committed to providing personalized
                services that bring out your best self through stunning nail art and care.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-2">{stat.icon}</div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-secondary/50 md:py-10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl font-bold text-foreground mb-4 text-2xl">Expert Nail Technicians & Artists</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the talented professionals dedicated to creating beautiful nails and unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="md:py-10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="md:text-4xl font-bold text-foreground mb-4 text-2xl">
              Premium Nail Services Loved by Our Clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover heartfelt testimonials from our clients sharing their joy and confidence gained through our
              expert nail services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Oh! My Nails?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Book your appointment today and discover the Oh! My Nails difference.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
