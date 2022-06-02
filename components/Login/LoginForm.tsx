import { Box, Button, Flex, Link, Text } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import NextLink from 'next/link'
import React from 'react'
import { MyInput, SubmitHandler } from '../form'
import { initialValues, SignInData } from './initialValues'
import { inputFields } from './inputFields'

interface LoginFormProps {
	onSubmit: SubmitHandler<SignInData>
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
	return (
		<Formik initialValues={initialValues} onSubmit={onSubmit}>
			{({ isSubmitting }) => (
				<Flex as={Form} flexDir="column" gap={6}>
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
							Not registered yet?{' '}
							<NextLink href="/register">
								<Link colorScheme="green">Sign Up</Link>
							</NextLink>
						</Text>
					</Box>
				</Flex>
			)}
		</Formik>
	)
}
