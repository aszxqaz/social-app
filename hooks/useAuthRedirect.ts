import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const useAuthRedirect = (
	whenNotAuthenticated: string | null,
	whenAuthenticated?: string | null,
) => {
	const { status } = useSession()
	const router = useRouter()

	useEffect(() => {
		if (status === 'unauthenticated' && typeof whenNotAuthenticated === 'string') {
			router.push(whenNotAuthenticated)
		}
		if (status === 'authenticated' && typeof whenAuthenticated === 'string') {
			router.push(whenAuthenticated)
		}
	}, [status])

  return { status }
}
