import { FormikHelpers } from 'formik'

export type SubmitHandler<Data extends {} = {}> = ((
	values: Data,
	formikHelpers: FormikHelpers<Data>,
) => void | Promise<any>) &
	((values: Data, { setErrors }: FormikHelpers<Data>) => void)
