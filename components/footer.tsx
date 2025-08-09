import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, CreditCard, Truck, Shield, RotateCcw } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay in the Loop</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Get exclusive access to new collections, artisan stories, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-full px-6 py-3"
              />
              <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 rounded-full px-8 py-3 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">C&S</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">Craft & Style</h3>
                <p className="text-xs text-gray-400">Premium Handcrafted</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting skilled artisans with people who appreciate authentic, handcrafted excellence. 
              Every purchase supports traditional crafts and sustainable practices.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:bg-white/10 rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10 rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10 rounded-full">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-white/10 rounded-full">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-amber-400 transition-colors">All Products</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-amber-400 transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact Us</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-amber-400 transition-colors">Artisan Stories</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-bold text-lg mb-6">Customer Care</h4>
            <ul className="space-y-4">
              <li><Link href="/shipping" className="text-gray-300 hover:text-amber-400 transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-gray-300 hover:text-amber-400 transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/size-guide" className="text-gray-300 hover:text-amber-400 transition-colors">Size Guide</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-amber-400 transition-colors">FAQ</Link></li>
              <li><Link href="/support" className="text-gray-300 hover:text-amber-400 transition-colors">Support Center</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">123 Craft Street, Style City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-gray-300">info@craftandstyle.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Business Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                <Truck className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <h6 className="font-semibold">Free Shipping</h6>
                <p className="text-sm text-gray-400">On orders over $100</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h6 className="font-semibold">Secure Payment</h6>
                <p className="text-sm text-gray-400">100% protected</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <RotateCcw className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h6 className="font-semibold">Easy Returns</h6>
                <p className="text-sm text-gray-400">30-day policy</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h6 className="font-semibold">Flexible Payment</h6>
                <p className="text-sm text-gray-400">Multiple options</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Craft & Style. All rights reserved. Made with ❤️ for artisans worldwide.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
