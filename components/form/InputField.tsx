import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from '@chakra-ui/react'
import { useField } from 'formik'
import React from 'react'

export type InputField<T> = {
	name: keyof T
	label: string
	placeholder: string
} & InputProps

export function MyInput<T>({ name, label, placeholder, ...restProps }: InputField<T>) {
	const [field, meta] = useField(name)
	const isInvalid = Boolean(meta.touched && meta.error)
	return (
		<FormControl isInvalid={isInvalid}>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			<Input type="text" id={name} {...restProps} {...field} />
			<FormErrorMessage as="div" minH={2}>
				{meta.error}
			</FormErrorMessage>
		</FormControl>
	)
}
