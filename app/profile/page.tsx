import { redirect } from 'next/navigation'
import { validateClientSession } from '@/lib/auth'
import { ClientProfile } from '@/components/client/client-profile'

export default async function ProfilePage() {
  const session = await validateClientSession()
  
  if (!session) {
    redirect('/auth/login')
  }

  return <ClientProfile />
}
