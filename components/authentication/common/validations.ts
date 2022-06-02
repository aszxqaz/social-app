import * as Yup from 'yup'
import { Validations } from '.'
import { SignInData, SignUpData } from '../content'

const login: Validations<SignInData> = {
	email: Yup.string().email('Please enter a valid email address').required('Email field is required'),
	password: Yup.string().required('Please enter your password'),
}

const register: Validations<SignUpData> = {
	firstName: Yup.string().min(2, 'Too short').max(15, 'Too long').required('Please enter your first name'),

	lastName: Yup.string().min(2, 'Too short').max(15, 'Too long').required('Please enter your last name'),

	email: Yup.string().email('Please enter a valid email address').required('Email field is required'),

	password: Yup.string()
		.matches(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/, 'Minimum eight characters, at least one letter and one number')
		.required('Please enter your password'),

	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords do not match')
		.required('Please confirm your password'),
}

export const validations = { login, register }
