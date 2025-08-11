import { Suspense } from 'react'
import { ProductGrid } from '@/components/product-grid'
import { Hero } from '@/components/hero'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FeaturedCategories } from '@/components/featured-categories'
import { Testimonials } from '@/components/testimonials'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedCategories />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our most-loved hampers and creations — from chocolate-filled delights to paper-crafted designs, all made to impress.
          </p>
        </div>
        <Suspense fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-square rounded-lg mb-4"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        }>
          <ProductGrid />
        </Suspense>
      </main>

      <Testimonials />
      <Footer />
    </div>
  )
}
