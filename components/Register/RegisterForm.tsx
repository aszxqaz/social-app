import { Box, Button, Flex, Link, Text, ChakraProps } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import NextLink from 'next/link'
import React from 'react'
import { MyInput, SubmitHandler } from '../form'
import { initialValues, SignUpData } from './initialValues'
import { inputFields } from './inputFields'
import { validationSchema } from './validationSchema'

type RegisterFormProps = {
	onSubmit: SubmitHandler<SignUpData>
} & ChakraProps

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, ...flexProps }) => {
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
			{({ values, handleChange, isSubmitting }) => (
				<Flex as={Form} flexDir="column" gap={6} {...flexProps}>
					{inputFields.map((field) => {
						const { key, ...rest } = field
						return <MyInput key={key} {...rest} />
					})}
					<Box w="100%">
						<Button isLoading={isSubmitting} mt={2} w="100%" colorScheme="green" type="submit">
							Sign Up
						</Button>
					</Box>
					<Box mt={2}>
						<Text textAlign="center">
							Have an account?{' '}
							<NextLink href="/login">
								<Link colorScheme="green">Sign In</Link>
							</NextLink>
						</Text>
					</Box>
				</Flex>
			)}
		</Formik>
	)
}
