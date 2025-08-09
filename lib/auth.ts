import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'

const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'your-secret-key')

export async function validateAdminSession() {
  try {
    const token = cookies().get('admin-token')?.value
    if (!token) return false

    const { payload } = await jwtVerify(token, secret)
    return payload.role === 'admin'
  } catch {
    return false
  }
}

export async function validateClientSession() {
  try {
    const token = cookies().get('client-token')?.value
    if (!token) return null

    const { payload } = await jwtVerify(token, secret)
    return payload.role === 'client' ? payload : null
  } catch {
    return null
  }
}
