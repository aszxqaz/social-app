import { forwardRef, MutableRefObject, Ref, useRef } from 'react'
import { ErrorMessage, FormikWrapperFactory, Question } from '../common'
import { validations } from '../common/validations'
import { initialValues, SignInData, textContent } from '../content'
import { inputProps } from '../content/inputProps'
import { useLoginHandler } from './useLoginHandler'

const LoginForm = FormikWrapperFactory<SignInData>()

export const Login: React.FC = () => {
	const errorMessageRef = useRef(null) as MutableRefObject<{
		sendError: (msg: string) => void
	} | null>

	const handleError = (err: string) => {
		errorMessageRef?.current?.sendError(err)
	}
	const { onSubmit, onChange } = useLoginHandler({ handleError })

	return (
		<>
			<LoginForm
				_onChange={onChange}
				onSubmit={onSubmit}
				inputProps={inputProps.login}
				textContent={textContent.login}
				initialValues={initialValues.login}
				validations={validations.login}>
				<ErrorMessage ref={errorMessageRef} />
			</LoginForm>
			<Question textContent={textContent.login} />
		</>
	)
}
