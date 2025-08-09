import { redirect } from 'next/navigation'
import { validateClientSession } from '@/lib/auth'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { OrderHistory } from '@/components/order-history'

export default async function OrdersPage() {
  const session = await validateClientSession()
  
  if (!session) {
    redirect('/auth/login')
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Order History</h1>
        <OrderHistory />
      </main>
      <Footer />
    </div>
  )
}
