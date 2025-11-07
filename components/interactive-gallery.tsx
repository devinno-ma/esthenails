"use client"

import { useState } from "react"
import { ScrollAnimation } from "./scroll-animation"

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/nail-art-design-1.jpg",
    alt: "Luxury nail art with gold accents",
    category: "Nail Art",
  },
  {
    id: 2,
    src: "/gel-manicure-1.jpg",
    alt: "Gel manicure with vibrant colors",
    category: "Gel Manicure",
  },
  {
    id: 3,
    src: "/nail-extensions-1.jpg",
    alt: "Professional nail extensions",
    category: "Extensions",
  },
  {
    id: 4,
    src: "/nail-art-design-2.jpg",
    alt: "Elegant nail design with gems",
    category: "Nail Art",
  },
  {
    id: 5,
    src: "/gel-pedicure-1.jpg",
    alt: "Beautiful gel pedicure",
    category: "Gel Pedicure",
  },
  {
    id: 6,
    src: "/dip-powder-nails-1.jpg",
    alt: "Dip powder nail design",
    category: "Dip Powder",
  },
]

export function InteractiveGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Nail Art", "Gel Manicure", "Gel Pedicure", "Extensions", "Dip Powder"]

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1))
    setSelectedImage(filteredImages[currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1])
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1))
    setSelectedImage(filteredImages[currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1])
  }

  return (
    <section className="bg-gradient-to-b from-background to-pink-lightest/20 md:py-5 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <p className="text-primary font-serif text-lg mb-4">Gallery</p>
            <h2 className="luxury-text md:text-6xl mb-6 text-4xl">Our Nail Artistry in Motion</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of stunning nail designs and transformations.
            </p>
          </div>
        </ScrollAnimation>

        {/* Category filters */}
        <ScrollAnimation className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setCurrentIndex(0)
                setSelectedImage(null)
              }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white luxury-shadow"
                  : "bg-white text-foreground border-2 border-pink-light hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </ScrollAnimation>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <ScrollAnimation key={image.id} style={{ animationDelay: `${index * 100}ms` }}>
              <div
                onClick={() => {
                  setSelectedImage(image)
                  setCurrentIndex(index)
                }}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer luxury-shadow hover:luxury-shadow-lg transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-serif text-xl font-semibold">{image.alt}</p>
                  <p className="text-white/80 text-sm">{image.category}</p>
                </div>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-pink-medium group-hover:w-full transition-all duration-500" />
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Lightbox modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors text-3xl"
              >
                ✕
              </button>

              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden bg-black">
                <img src={selectedImage.src || "/placeholder.svg"} alt={selectedImage.alt} className="w-full h-auto" />

                {/* Navigation buttons */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm text-2xl"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm text-2xl"
                >
                  →
                </button>
              </div>

              {/* Image info */}
              <div className="mt-6 text-center text-white">
                <p className="text-xl font-serif font-semibold">{selectedImage.alt}</p>
                <p className="text-white/70">{selectedImage.category}</p>
                <p className="text-sm text-white/50 mt-2">
                  {currentIndex + 1} / {filteredImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
