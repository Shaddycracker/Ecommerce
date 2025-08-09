import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST() {
  cookies().delete('client-token')
  return NextResponse.json({ success: true })
}
