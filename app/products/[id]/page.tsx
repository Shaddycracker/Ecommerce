import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ProductDetails } from '@/components/product-details'

async function getProduct(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/admin/products`, {
    cache: 'no-store'
  })
  if (!res.ok) return null
  
  const products = await res.json()
  return products.find((product: any) => product.id === id)
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)
  
  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ProductDetails product={product} />
      </main>
      <Footer />
    </div>
  )
}
