import { NextRequest, NextResponse } from 'next/server'
import { validateClientSession } from '@/lib/auth'
import { orders } from '@/lib/data'

export async function GET() {
  return NextResponse.json(orders)
}

export async function POST(request: NextRequest) {
  const session = await validateClientSession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const orderData = await request.json()
    const newOrder = {
      id: Date.now().toString(),
      userId: session.userId,
      ...orderData,
      status: 'pending',
      createdAt: new Date().toISOString()
    }
    
    orders.push(newOrder)
    return NextResponse.json(newOrder, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
  }
}
