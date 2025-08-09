"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  processing: 'bg-blue-100 text-blue-800',
  shipped: 'bg-green-100 text-green-800',
  delivered: 'bg-gray-100 text-gray-800'
}

export function OrderHistory() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/orders')
      const data = await res.json()
      setOrders(data)
    } catch (error) {
      console.error('Failed to fetch orders')
    }
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 mb-4">No orders found</p>
        <Button>Start Shopping</Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {orders.map((order: any) => (
        <Card key={order.id}>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Order #{order.id}</CardTitle>
              <Badge className={statusColors[order.status as keyof typeof statusColors]}>
                {order.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="font-semibold">Order Date</p>
                <p className="text-sm text-gray-600">
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="font-semibold">Total Amount</p>
                <p className="text-lg font-bold">${order.total}</p>
              </div>
              <div>
                <p className="font-semibold">Delivery Address</p>
                <p className="text-sm text-gray-600">{order.deliveryAddress}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="font-semibold mb-2">Items</p>
              {order.items?.map((item: any, index: number) => (
                <div key={index} className="flex justify-between text-sm py-1">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Payment: {order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Card'}
              </div>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
