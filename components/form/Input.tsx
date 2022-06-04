import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'
import { useField } from 'formik'
import React from 'react'
import { Paragraph } from '../../easy-imports'

export type InputProps<T> = {
	name: keyof T
	label: string
	placeholder: string
	_onChange?: React.ChangeEventHandler<HTMLInputElement>
} & ChakraInputProps

export function InputFactory<T>() {
	return function Input({ name, label, placeholder, _onChange, ...restProps }: InputProps<T>) {
		const [{ onChange, ...field }, meta] = useField(name)
		const isInvalid = Boolean(meta.touched && meta.error)
		return (
			<FormControl isInvalid={isInvalid}>
				<FormLabel htmlFor={name}>{label}</FormLabel>
				<ChakraInput
					type="text"
					id={name}
					{...restProps}
					onChange={(e) => {
						onChange(e)
						_onChange?.(e)
					}}
					{...field}
				/>
				<Paragraph minH="1.5rem" colorScheme="red">
					{meta.error}
				</Paragraph>
			</FormControl>
		)
	}
}
