export interface SignUpData {
	firstName: string
  lastName: string
	email: string
	password: string
	confirmPassword: string
}

export const initialValues: SignUpData = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}