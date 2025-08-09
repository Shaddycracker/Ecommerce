"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Minus, Plus, ShoppingCart, Heart } from 'lucide-react'

interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
}

export function ProductDetails({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log('Added to cart:', { product, quantity })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Product Images */}
      <div className="space-y-4">
        <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.images?.[selectedImage] || '/placeholder.svg?height=600&width=600'}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        
        {product.images && product.images.length > 1 && (
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square relative bg-gray-100 rounded-lg overflow-hidden border-2 ${
                  selectedImage === index ? 'border-primary' : 'border-transparent'
                }`}
              >
                <Image
                  src={image || '/placeholder.svg?height=150&width=150'}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="space-y-6">
        <div>
          <Badge className="mb-2">Handcrafted</Badge>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-4xl font-bold text-primary mb-6">${product.price}</p>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>

        {/* Quantity Selector */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="font-semibold">Quantity:</span>
            <div className="flex items-center border rounded-lg">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-4 py-2 font-semibold">{quantity}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button onClick={handleAddToCart} className="flex-1">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Product Details */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Product Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Material:</span>
                <span>Premium Wood</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Dimensions:</span>
                <span>12" x 8" x 3"</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Weight:</span>
                <span>2.5 lbs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Origin:</span>
                <span>Handcrafted in USA</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shipping Information */}
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Shipping & Returns</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Free shipping on orders over $100</p>
              <p>• Standard delivery: 5-7 business days</p>
              <p>• Express delivery: 2-3 business days</p>
              <p>• 30-day return policy</p>
              <p>• Contact on delivery payment available</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
