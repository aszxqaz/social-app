import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

interface RedirectOptions {
	whenNotAuthenticated: string | null
	whenAuthenticated: string | null
}

const defaultOptions: RedirectOptions = {
	whenNotAuthenticated: '/login',
	whenAuthenticated: '/',
}

export const useAuthRedirect = (options: RedirectOptions = defaultOptions) => {
	const { whenAuthenticated, whenNotAuthenticated } = options
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

	return {
		status,
	}
}
