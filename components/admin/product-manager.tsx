"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { useEdgeStore } from '@/lib/edgestore'
import { X, Upload } from 'lucide-react'
import Image from 'next/image'

export function ProductManager() {
  const [products, setProducts] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    images: [] as string[]
  })
  const [uploading, setUploading] = useState(false)
  const { toast } = useToast()
  const { edgestore } = useEdgeStore()

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/admin/products')
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      toast({ title: 'Failed to fetch products', variant: 'destructive' })
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || formData.images.length >= 10) return

    setUploading(true)
    try {
      const uploadPromises = Array.from(files).slice(0, 10 - formData.images.length).map(async (file) => {
        const res = await edgestore.publicFiles.upload({ file })
        return res.url
      })

      const urls = await Promise.all(uploadPromises)
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...urls]
      }))
    } catch (error) {
      toast({ title: 'Failed to upload images', variant: 'destructive' })
    } finally {
      setUploading(false)
    }
  }

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.images.length === 0) {
      toast({ title: 'At least one image is required', variant: 'destructive' })
      return
    }

    try {
      const res = await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          price: parseFloat(formData.price)
        })
      })

      if (res.ok) {
        toast({ title: 'Product added successfully' })
        setFormData({ name: '', description: '', price: '', images: [] })
        fetchProducts()
      } else {
        toast({ title: 'Failed to add product', variant: 'destructive' })
      }
    } catch (error) {
      toast({ title: 'Failed to add product', variant: 'destructive' })
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add New Product</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="price">Price ($)</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                required
              />
            </div>
            
            <div>
              <Label>Images (1-10 required)</Label>
              <div className="mt-2">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                  disabled={uploading || formData.images.length >= 10}
                />
                <label
                  htmlFor="image-upload"
                  className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer ${
                    uploading || formData.images.length >= 10 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {uploading ? 'Uploading...' : 'Upload Images'}
                </label>
                <p className="text-sm text-gray-500 mt-1">
                  {formData.images.length}/10 images uploaded
                </p>
              </div>
              
              {formData.images.length > 0 && (
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {formData.images.map((url, index) => (
                    <div key={index} className="relative">
                      <Image
                        src={url || "/placeholder.svg"}
                        alt={`Product image ${index + 1}`}
                        width={100}
                        height={100}
                        className="object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <Button type="submit" disabled={uploading || formData.images.length === 0}>
              Add Product
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Existing Products ({products.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product: any) => (
              <div key={product.id} className="border rounded-lg p-4">
                {product.images?.[0] && (
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={150}
                    className="object-cover rounded mb-2"
                  />
                )}
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <p className="font-bold">${product.price}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
