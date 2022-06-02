import { useState } from 'react'
import { axios } from '../../../axios'
import { SubmitHandler } from '../../form'
import { SignUpData } from '../content'

export function useRegisterHandler() {
	const [signUpStatus, setSignUpStatus] = useState<null | 'submitting' | 'success'>(null)

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
