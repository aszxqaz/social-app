import { FormikWrapperFactory, Question } from '../common'
import { validations } from '../common/validations'
import { SignInData, initialValues, textContent } from '../content'
import { inputProps } from '../content/inputProps'
import { useLoginHandler } from './useLoginHandler'

export const Login: React.FC = () => {
	const { error, onSubmit } = useLoginHandler()

	const LoginForm = FormikWrapperFactory<SignInData>({
		initialValues: initialValues.login,
		onSubmit,
		validations: validations.login,
	})
	return (
		<>
			<LoginForm inputProps={inputProps.login} textContent={textContent.login} />
			<Question textContent={textContent.login} />
		</>
	)
}
