import React, { useRef } from 'react'
import { MutableRefObject } from 'react'
import { ErrorMessage, FormikWrapperFactory, Question } from '../common'
import { validations } from '../common/validations'
import { SignUpData, initialValues, textContent } from '../content'
import { inputProps } from '../content/inputProps'
import Success from './Success'
import { useRegisterHandler } from './useRegisterHandler'

const RegisterForm = FormikWrapperFactory<SignUpData>()

export const Register: React.FC = () => {
	const errorMessageRef = useRef(null) as MutableRefObject<{
		sendError: (msg: string) => void
	} | null>

	const handleError = (err: string) => {
		errorMessageRef?.current?.sendError(err)
	}

	const { signUpStatus, onSubmit } = useRegisterHandler({ handleError })

	return (
		<>
			{!signUpStatus ? (
				<>
					<RegisterForm
						textContent={textContent.register}
						inputProps={inputProps.register}
						initialValues={initialValues.register}
						onSubmit={onSubmit}
						validations={validations.register}>
						<ErrorMessage ref={errorMessageRef} />
					</RegisterForm>
					<Question textContent={textContent.register} />
				</>
			) : (
				<Success />
			)}
		</>
	)
}
