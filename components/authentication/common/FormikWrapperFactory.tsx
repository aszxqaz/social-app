import { Box, Button, ChakraProps, Flex, Heading } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { InputFactory, InputProps, SubmitHandler } from '../../form'
import { TextContent } from '../content/textContent'

export type Validations<T> = { [P in keyof T]: Yup.BaseSchema }

export type AuthenticationFormProps<T> = {
	textContent: TextContent
	inputProps: InputProps<T>[]
} & ChakraProps

export type FormikWrapperFactoryProps<T> = {
	onSubmit: SubmitHandler<T>
	initialValues: T
	validations?: Validations<T>
}

export function FormikWrapperFactory<T>({
	initialValues,
	onSubmit,
	validations,
}: FormikWrapperFactoryProps<T>): React.FC<AuthenticationFormProps<T>> {
	return ({ textContent, inputProps, ...flexProps }) => {
		const validationSchema = validations ? Yup.object().shape(validations) : undefined
		const Input = InputFactory<T>()
		return (
			<>
				<Heading letterSpacing={2} textTransform="uppercase" textAlign="center" colorScheme="green" mb={2} size="lg">
					{textContent.heading}
				</Heading>
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
					validateOnChange={false}
					validateOnBlur={false}>
					{({ isSubmitting }) => (
						<Flex as={Form} flexDir="column" gap={1} {...flexProps}>
							{inputProps.map((field) => {
								const { key, ...rest } = field
								return <Input key={key} {...rest} />
							})}
							<Box w="100%">
								<Button isLoading={isSubmitting} mt={2} w="100%" colorScheme="green" type="submit">
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
