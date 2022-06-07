import { signIn } from 'next-auth/react'
import { EventHandler, useCallback, useRef, useState } from 'react'
import { SubmitHandler } from '../../form'
import { SignInData } from '../content'

export function useLoginHandler({ handleError }: { handleError: any }) {
	const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(() => {
		handleError('')
	}, [handleError])

	const submitHandler: SubmitHandler<SignInData> = useCallback(
		async (data) => {
			try {
				const res = await signIn<'credentials'>('credentials', {
					email: data.email,
					password: data.password,
					redirect: false,
					callbackUrl: process.env.NEXTAUTH_URL,
				})
				if (!res) {
					handleError('Oops, something wrong on the server')
				} else if (res.status === 401) {
					handleError('Wrong email or password')
				}
			} catch (e: any) {
				console.log(e)
			}
		},
		[handleError],
	)

	return {
		onSubmit: submitHandler,
		onChange,
	}
}
