import { Box, Button, ChakraProps, Flex, Heading } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { InputFactory, InputProps, SubmitHandler } from '../../form'
import { TextContent } from '../content/textContent'
import { useLoginHandler } from '../login/useLoginHandler'

export type Validations<T> = { [P in keyof T]: Yup.BaseSchema }

export type AuthenticationFormProps<T> = {
	textContent: TextContent
	inputProps: InputProps<T>[]
} & ChakraProps

export type FormikWrapperFactoryProps<T> = {
	onSubmit: SubmitHandler<T>
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	initialValues: T
	validations?: Validations<T>
} & {
	textContent: TextContent
	inputProps: InputProps<T>[]
} & ChakraProps

export type FormikWrapperProps<T> = {
	onSubmit: SubmitHandler<T>
	_onChange?: React.ChangeEventHandler<HTMLInputElement>
	initialValues: T
	validations?: Validations<T>
} & {
	textContent: TextContent
	inputProps: InputProps<T>[]
} & ChakraProps & { error?: string | null }

export function FormikWrapperFactory<T>(): React.FC<FormikWrapperProps<T> & { children?: React.ReactNode }> {
	return function FormikWrapper({
		initialValues,
		validations,
		textContent,
		_onChange,
		onSubmit,
		inputProps,
		children,
		error,
		...flexProps
	}) {
		const validationSchema = validations ? Yup.object().shape(validations) : undefined
		const Input = InputFactory<T>()
		console.log('RERENDER: ')
		console.log('FORMIK RERENDER')
		return (
			<>
				<Heading letterSpacing={2} textTransform="uppercase" textAlign="center" colorScheme="green" mb={2} size="lg">
					{textContent.heading}
				</Heading>
				{children}
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
					validateOnChange={false}
					validateOnBlur={false}>
					{({ isSubmitting }) => (
						<Flex as={Form} flexDir="column" {...flexProps}>
							{inputProps.map((field) => {
								const { key, ...rest } = field
								return <Input key={key} {...rest} _onChange={_onChange} />
							})}
							<Box w="100%">
								<Button isLoading={isSubmitting} mt={3} w="100%" type="submit">
									{textContent.submitBtnText}
								</Button>
							</Box>
						</Flex>
					)}
				</Formik>
			</>
		)
	}
}
