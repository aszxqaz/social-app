import React from 'react'
import { FormikWrapperFactory, Question } from '../common'
import { validations } from '../common/validations'
import { SignUpData, initialValues, textContent } from '../content'
import { inputProps } from '../content/inputProps'
import Success from './Success'
import { useRegisterHandler } from './useRegisterHandler'

export const Register: React.FC = () => {
	const { signUpStatus, onSubmit } = useRegisterHandler()

	const RegisterForm = FormikWrapperFactory<SignUpData>({
		initialValues: initialValues.register,
		onSubmit,
		validations: validations.register,
	})
	return (
		<>
			{signUpStatus !== 'success' ? (
				<>
					<RegisterForm textContent={textContent.register} inputProps={inputProps.register} />
					<Question textContent={textContent.register} />
				</>
			) : (
				<Success />
			)}
		</>
	)
}
