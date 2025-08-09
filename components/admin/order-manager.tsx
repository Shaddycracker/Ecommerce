"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  processing: 'bg-blue-100 text-blue-800',
  shipped: 'bg-green-100 text-green-800',
  delivered: 'bg-gray-100 text-gray-800'
}

export function OrderManager() {
  const [orders, setOrders] = useState([])
  const { toast } = useToast()

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const res = await fetch('/api/orders')
      const data = await res.json()
      setOrders(data)
    } catch (error) {
      toast({ title: 'Failed to fetch orders', variant: 'destructive' })
    }
  }

  const updateOrderStatus = async (orderId: string, status: string) => {
    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      })

      if (res.ok) {
        toast({ title: 'Order status updated' })
        fetchOrders()
      } else {
        toast({ title: 'Failed to update order', variant: 'destructive' })
      }
    } catch (error) {
      toast({ title: 'Failed to update order', variant: 'destructive' })
    }
  }

  return (
    <div className="space-y-4">
      {orders.length === 0 ? (
        <p className="text-center text-gray-500 py-8">No orders found</p>
      ) : (
        orders.map((order: any) => (
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="font-semibold">Customer</p>
                  <p>{order.customerName}</p>
                  <p className="text-sm text-gray-600">{order.customerEmail}</p>
                </div>
                <div>
                  <p className="font-semibold">Delivery Address</p>
                  <p className="text-sm">{order.deliveryAddress}</p>
                </div>
                <div>
                  <p className="font-semibold">Total</p>
                  <p className="text-lg font-bold">${order.total}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="font-semibold mb-2">Items</p>
                {order.items?.map((item: any, index: number) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex justify-between items-center">
                <p className="text-sm text-gray-600">
                  Ordered: {new Date(order.createdAt).toLocaleDateString()}
                </p>
                <Select
                  value={order.status}
                  onValueChange={(status) => updateOrderStatus(order.id, status)}
                >
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
