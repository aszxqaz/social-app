import { LOGIN_ROUTE, REGISTER_ROUTE } from '../../../routes'

export interface TextContent {
	heading: string
	question: string
	link: string
	submitBtnText: string
	href: string
}

const login: TextContent = {
	heading: 'Login',
	question: 'Not registered yet?',
	href: REGISTER_ROUTE,
	submitBtnText: 'Sign In',
	link: 'Sign Up',
}

const register: TextContent = {
	heading: 'Register',
	question: 'Have an account?',
	href: LOGIN_ROUTE,
	submitBtnText: 'Sign Up',
	link: 'Sign In',
}

export const textContent = { login, register }
