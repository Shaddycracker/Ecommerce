"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShoppingCart, User, Menu, Search, Heart, Phone, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-3 w-3" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-3 w-3" />
              <span>info@craftandstyle.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Free shipping on orders over $100 🚚</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">C&S</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">Craft & Style</h1>
                <p className="text-xs text-gray-500">Premium Handcrafted</p>
              </div>
            </Link>
            
            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Search for handcrafted products..." 
                  className="pl-10 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                Products
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="relative hover:bg-amber-50">
                <Heart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-red-500 text-white text-xs">
                  2
                </Badge>
              </Button>
              
              <Button variant="ghost" size="icon" className="relative hover:bg-amber-50">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-amber-500 text-white text-xs">
                  3
                </Badge>
              </Button>
              
              <Link href="/auth/login">
                <Button variant="ghost" size="icon" className="hover:bg-amber-50">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t animate-fade-in">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    placeholder="Search products..." 
                    className="pl-10 pr-4 py-3 rounded-full"
                  />
                </div>
              </div>
              
              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-gray-700 hover:text-amber-600 font-medium py-2">
                  Home
                </Link>
                <Link href="/products" className="text-gray-700 hover:text-amber-600 font-medium py-2">
                  Products
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-amber-600 font-medium py-2">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-amber-600 font-medium py-2">
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
