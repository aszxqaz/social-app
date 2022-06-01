import { SignUpData } from './initialValues'
import * as Yup from 'yup'

type Validations<T> = { [P in keyof T]: Yup.BaseSchema }

const validations: Validations<SignUpData> = {
	firstName: Yup.string()
		.min(2, 'Too short')
		.max(15, 'Too long')
		.required('Please enter your first name'),

	lastName: Yup.string()
		.min(2, 'Too short')
		.max(15, 'Too long')
		.required('Please enter your last name'),

	email: Yup.string()
		.email('Please enter a valid email address')
		.required('Email field is required'),

	password: Yup.string()
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
			'Minimum eight characters, at least one letter and one number',
		)
		.required('Please enter your password'),

	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], 'Passwords do not match')
		.required('Please confirm your password'),
}

export const validationSchema = Yup.object().shape(validations)
