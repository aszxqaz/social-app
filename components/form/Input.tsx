import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'
import { useField } from 'formik'
import React from 'react'
import { Paragraph } from '../../easy-imports'

export type InputProps<T> = {
	name: keyof T
	label: string
	placeholder: string
} & ChakraInputProps

export function InputFactory<T>() {
	return function Input ({ name, label, placeholder, ...restProps }: InputProps<T>) {
		const [field, meta] = useField(name)
		const isInvalid = Boolean(meta.touched && meta.error)
		return (
			<FormControl isInvalid={isInvalid}>
				<FormLabel htmlFor={name}>{label}</FormLabel>
				<ChakraInput type="text" id={name} {...restProps} {...field} />
				<Paragraph minH="1.5rem" colorScheme="red">
					{meta.error}
				</Paragraph>
			</FormControl>
		)
	}
}
