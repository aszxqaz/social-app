export type AuthenticationVariant = 'login' | 'register'

export type SignInData = {
	email: string
	password: string
}

export interface SignUpData {
	firstName: string
	lastName: string
	email: string
	password: string
	confirmPassword: string
}

export type InitialValues<A extends AuthenticationVariant, U, B extends AuthenticationVariant, T> = {
	[key in A]: {
		[K in keyof U]: U[K]
	}
} & {
	[key in B]: {
		[K in keyof T]: T[K]
	}
}

export const initialValues: InitialValues<'login', SignInData, 'register', SignUpData> = {
	login: {
		email: '',
		password: '',
	},
	register: {
		confirmPassword: '',
		email: '',
		firstName: '',
		lastName: '',
		password: '',
	},
}
