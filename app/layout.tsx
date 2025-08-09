import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { EdgeStoreProvider } from '@/lib/edgestore'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Craft & Style - Premium Handcrafted Products',
  description: 'Discover unique handcrafted products with premium quality and stylish designs',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EdgeStoreProvider>
          {children}
          <Toaster />
        </EdgeStoreProvider>
      </body>
    </html>
  )
}
