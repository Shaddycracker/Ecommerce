import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group product-card-hover border-0 shadow-lg overflow-hidden bg-white">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.images?.[0] || '/placeholder.svg?height=400&width=400&text=Handcrafted+Product'}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay with actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-3">
            <Button size="sm" variant="secondary" className="rounded-full bg-white/90 hover:bg-white">
              <Eye className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="secondary" className="rounded-full bg-white/90 hover:bg-white">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4">
          <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0">
            Handcrafted
          </Badge>
        </div>
        
        {/* Rating */}
        <div className="absolute top-4 right-4 bg-white/90 rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium">4.8</span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-3">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-bold text-lg mb-2 text-gray-800 hover:text-amber-600 transition-colors line-clamp-2">
              {product.name}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-800">${product.price}</span>
            <span className="text-sm text-gray-500 line-through">${(product.price * 1.2).toFixed(2)}</span>
          </div>
          <Badge variant="outline" className="text-green-600 border-green-200">
            In Stock
          </Badge>
        </div>
        
        <div className="flex space-x-2">
          <Button className="flex-1 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white rounded-full font-semibold transition-all duration-300">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
        
        {/* Additional info */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Free shipping</span>
            <span>2-3 days delivery</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
