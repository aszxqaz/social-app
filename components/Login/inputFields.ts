import { withKey, WithKey } from '../../content/utils/withKey'
import { InputField } from '../form/InputField'
import { SignInData } from './initialValues'

export type LoginInput = InputField<SignInData>

export const inputFields: WithKey<LoginInput>[] = withKey([
	{
		name: 'email',
		label: 'E-mail',
		placeholder: 'E-mail',
	},
	{
		name: 'password',
		label: 'Password',
		placeholder: 'Password',
		type: 'password',
	},
])
