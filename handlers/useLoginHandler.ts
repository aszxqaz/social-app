import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { SubmitHandler } from '../components/form'
import { SignInData } from '../components/Login/initialValues'

export function useLoginHandler() {
	const [error, setError] = useState<string | null>(null)

	const submitHandler: SubmitHandler<SignInData> = async (data) => {
		try {
			const res = await signIn<'credentials'>('credentials', {
				email: data.email,
				password: data.password,
				redirect: false,
				callbackUrl: process.env.NEXTAUTH_URL,
			})
			if (!res) {
				setError('Oops, something wrong at the server')
			} else if (res.status === 401) {
				setError('Credentials provided are wrong')
			}
		} catch (e: any) {
			console.log(e)
		}
	}

	return {
		onSubmit: submitHandler,
		error,
	}
}
