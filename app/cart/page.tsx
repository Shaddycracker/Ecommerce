import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ShoppingCart } from '@/components/shopping-cart'

export default function CartPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <ShoppingCart />
      </main>
      <Footer />
    </div>
  )
}
