import { FormikHelpers } from 'formik'
import { SignUpData } from '../content'

export type RegisterSubmitHandler = ((
	values: SignUpData,
	formikHelpers: FormikHelpers<SignUpData>,
) => void | Promise<any>) &
	((values: SignUpData, { setErrors }: FormikHelpers<SignUpData>) => void)
