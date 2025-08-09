import { ClientLogin } from '@/components/auth/client-login'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <ClientLogin />
    </div>
  )
}
