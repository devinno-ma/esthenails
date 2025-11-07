import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black-primary text-white py-12 bg-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">ESTHENAILS</h3>
            <p className="text-sm opacity-80">
              Premium nail art and beauty services with expert technicians. Elevate your style with stunning designs and
              precision care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-pink-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-pink-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-pink-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pink-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#nails" className="hover:text-pink-primary transition-colors">
                  Nail Art
                </Link>
              </li>
              <li>
                <Link href="/services#manicure" className="hover:text-pink-primary transition-colors">
                  Manicures
                </Link>
              </li>
              <li>
                <Link href="/services#pedicure" className="hover:text-pink-primary transition-colors">
                  Pedicures
                </Link>
              </li>
              <li>
                <Link href="/services#extensions" className="hover:text-pink-primary transition-colors">
                  Extensions
                </Link>
              </li>
              <li>
                <Link href="/services#gel" className="hover:text-pink-primary transition-colors">
                  Gel Polish
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Your Location</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+1-XXX-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>hello@esthenails.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>&copy; 2025 ESTHENAILS. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-pink-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-pink-primary transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-pink-primary transition-colors">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
