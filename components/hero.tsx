import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Star, Users, Award } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">Trusted by 10,000+ customers</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Handcrafted</span>
              <br />
              <span className="text-gray-800">Excellence</span>
              <br />
              <span className="text-gray-600 text-3xl lg:text-4xl">Delivered to You</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Discover unique, premium handcrafted products made by skilled artisans. 
              Each piece tells a story of passion, tradition, and exceptional craftsmanship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/products">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                  Our Story
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-3 mx-auto">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">100+</div>
                <div className="text-sm text-gray-600">Artisans</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-3 mx-auto">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">500+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-3 mx-auto">
                  <Star className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">4.9</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src="https://files.edgestore.dev/s9z7ph3133ekjd7k/publicFiles/_public/bad9df48-52af-4b1c-8e26-729639f98120.png" 
                alt="Skilled artisan crafting" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Premium Quality</div>
                    <div className="text-sm text-gray-600">Certified Authentic</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-bounce" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">10K+ Happy</div>
                    <div className="text-sm text-gray-600">Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
