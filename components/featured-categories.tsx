import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    name: 'Jewelry & Accessories',
    description: 'Handcrafted rings, necklaces, and unique accessories',
    image: '/placeholder.svg?height=300&width=400&text=Jewelry',
    count: '120+ items',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Home & Decor',
    description: 'Beautiful pottery, vases, and home decorations',
    image: '/placeholder.svg?height=300&width=400&text=Home+Decor',
    count: '85+ items',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Textiles & Fabrics',
    description: 'Handwoven scarves, bags, and textile art',
    image: '/placeholder.svg?height=300&width=400&text=Textiles',
    count: '95+ items',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Woodwork & Crafts',
    description: 'Carved sculptures, furniture, and wooden art',
    image: '/placeholder.svg?height=300&width=400&text=Woodwork',
    count: '60+ items',
    color: 'from-amber-500 to-orange-500'
  }
]

export function FeaturedCategories() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Explore Our <span className="gradient-text">Collections</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover unique handcrafted products across different categories, each telling its own story of artisan excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link key={category.name} href={`/products?category=${category.name.toLowerCase()}`}>
              <Card className="group hover-lift border-0 shadow-lg overflow-hidden h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {category.count}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-amber-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors">
                    <span>Explore Collection</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
