import { useMemo, useState } from 'react'
import { axios } from '../axios'
import { SubmitHandler } from '../components/form'
import { SignUpData } from '../components/Register'

type SignUpStatus = null | 'submitting' | 'success'

export function useRegisterHandler() {
	const [signUpStatus, setSignUpStatus] = useState<SignUpStatus>(null)

	const submitHandler: SubmitHandler<SignUpData> = async (data) => {
		setSignUpStatus('submitting')

		try {
			const res = await axios.post('/api/register', data)
			setSignUpStatus('success')
		} catch (e: any) {
			setSignUpStatus(null)
		}
	}

	return { signUpStatus, onSubmit: submitHandler }
}
