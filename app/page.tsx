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
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular handcrafted pieces, each one carefully selected for its exceptional quality and unique design.
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
