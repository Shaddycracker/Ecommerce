import { redirect } from 'next/navigation'
import { AdminDashboard } from '@/components/admin/admin-dashboard'
import { validateAdminSession } from '@/lib/auth'

export default async function AdminPage() {
  const isValid = await validateAdminSession()
  
  if (!isValid) {
    redirect('/admin/login')
  }

  return <AdminDashboard />
}
