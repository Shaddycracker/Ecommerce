import { NextRequest, NextResponse } from 'next/server'
import { validateAdminSession } from '@/lib/auth'
import { orders } from '@/lib/data'

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const isValid = await validateAdminSession()
  if (!isValid) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { status } = await request.json()
    const orderIndex = orders.findIndex(order => order.id === params.id)
    
    if (orderIndex === -1) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 })
    }
    
    orders[orderIndex] = { ...orders[orderIndex], status }
    return NextResponse.json(orders[orderIndex])
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update order' }, { status: 500 })
  }
}
