import { withKey, WithKey } from '../../content/utils/withKey'
import { InputField } from '../form/InputField'
import { SignUpData } from './initialValues'

export type RegisterInput = InputField<SignUpData>

export const inputFields: WithKey<RegisterInput>[] = withKey([
	{
		name: 'email',
		label: 'E-mail',
		placeholder: 'E-mail',
	},
	{
		name: 'firstName',
		label: 'First Name',
		placeholder: 'First Name',
	},
	{
		name: 'lastName',
		label: 'Last Name',
		placeholder: 'Last Name',
	},
	{
		name: 'password',
		label: 'Password',
		placeholder: 'Password',
		type: 'password',
	},
	{
		name: 'confirmPassword',
		label: 'Confirm password',
		placeholder: 'Confirm your password',
		type: 'password',
	},
])
