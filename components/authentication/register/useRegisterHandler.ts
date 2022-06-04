import { AxiosError } from 'axios'
import { useState } from 'react'
import { axios } from '../../../axios'
import { SubmitHandler } from '../../form'
import { SignUpData } from '../content'

type Data = {
	error: string
}

export function useRegisterHandler({ handleError }: { handleError: any }) {
	const [signUpStatus, setSignUpStatus] = useState<boolean>(false)

	const submitHandler: SubmitHandler<SignUpData> = async (data) => {
		try {
			const res = await axios.post('/api/register', data)
			setSignUpStatus(true)
		} catch (e: any) {
			if (e instanceof AxiosError) {
				handleError(e.response?.data.error)
			}
		}
	}

	return { signUpStatus, onSubmit: submitHandler }
}
