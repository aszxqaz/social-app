import { SignInData, SignUpData } from './initialValues'
import { withKey, WithKey } from './withKey'
import { InputProps } from '../../../components/form/Input'

const login: WithKey<InputProps<SignInData>>[] = withKey([
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

const register: WithKey<InputProps<SignUpData>>[] = withKey([
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

export const inputProps = { login, register }
