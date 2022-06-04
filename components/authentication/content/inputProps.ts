import { SignInData, SignUpData } from './initialValues'
import { withKey, WithKey } from './withKey'
import { InputProps } from '../../../components/form/Input'

// https://www.chromium.org/developers/design-documents/form-styles-that-chromium-understands/

const login: WithKey<InputProps<SignInData>>[] = withKey([
	{
		name: 'email',
		label: 'E-mail',
		placeholder: 'E-mail',
		autoComplete: 'username',
	},
	{
		name: 'password',
		label: 'Password',
		placeholder: 'Password',
		type: 'password',
		autoComplete: 'current-password',
	},
])

const register: WithKey<InputProps<SignUpData>>[] = withKey([
	{
		name: 'email',
		label: 'E-mail',
		placeholder: 'E-mail',
		autoComplete: 'username',
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
		autoComplete: 'new-password',
	},
	{
		name: 'confirmPassword',
		label: 'Confirm password',
		placeholder: 'Confirm your password',
		type: 'password',
		autoComplete: 'new-password', 
	},
])

export const inputProps = { login, register }
