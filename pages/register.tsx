import {
	Box,
	Button,
	Center,
	Container,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Link,
	Text,
} from '@chakra-ui/react'
import { axios } from '../axios'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { default as NextLink } from 'next/link'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuthRedirect } from '../hooks/useAuthRedirect'
import { emailRegExp } from '../utils/email-regexp'
import { RegistrationError } from './api/register'

interface SignUpData {
	username: string
	email: string
	password: string
	confirmPassword: string
}

type SignUpStatus = null | 'submitting' | 'success'

const Register: React.FC = ({}) => {
	useAuthRedirect({
		whenAuthenticated: '/',
		whenNotAuthenticated: null,
	})

	const {
		register,
		getValues,
		setError,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpData>()

	const [signUpStatus, setSignUpStatus] = useState<SignUpStatus>(null)

	const submitHandler: SubmitHandler<SignUpData> = async (data) => {
		setSignUpStatus('submitting')
		try {
			const res = await axios.post('/api/register', data)
			setSignUpStatus('success')
		} catch (e: any) {
			const errors: RegistrationError[] = e.response.data.errors
			errors.forEach((error) => {
				setError(error.name, { message: error.message })
			})
			setSignUpStatus(null)
		}
	}

	if (signUpStatus === 'success') return <Success />

	return (
		<Container>
			<Flex
				as="form"
				flexDir="column"
				gap={6}
				p={10}
				alignItems="center"
				onSubmit={handleSubmit(submitHandler)}>
				<FormControl isInvalid={!!errors.email}>
					<FormLabel htmlFor="email">E-mail</FormLabel>
					<Input
						id="email"
						placeholder="E-mail"
						{...register('email', {
							required: 'This is required',
							pattern: emailRegExp,
						})}
					/>
					<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={!!errors.username}>
					<FormLabel htmlFor="username">Username</FormLabel>
					<Input
						id="username"
						placeholder="Username"
						{...register('username', {
							required: 'This is required',
							maxLength: 30,
							minLength: 3,
						})}
					/>
					<FormErrorMessage>{errors.username?.message}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={!!errors.password}>
					<FormLabel htmlFor="password">Password</FormLabel>
					<Input
						id="password"
						type="password"
						placeholder="Password"
						{...register('password', {
							required: 'This is required',
							maxLength: 30,
							minLength: 3,
						})}
					/>
					<FormErrorMessage>{errors.password?.message}</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={!!errors.confirmPassword}>
					<FormLabel htmlFor="username">Confirm password</FormLabel>
					<Input
						type="password"
						id="confirmPassword"
						placeholder="Confirm password"
						{...register('confirmPassword', {
							required: 'This is required',
							maxLength: 30,
							pattern: {
								value: new RegExp('^' + getValues().password + '$', 'g'),
								message: 'Password does not match',
							},
						})}
					/>
					<FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
				</FormControl>
				<Box w="100%">
					<Button
						isLoading={signUpStatus === 'submitting'}
						mt={2}
						w="100%"
						colorScheme="green"
						type="submit">
						Sign Up
					</Button>
				</Box>
				<Box mt={2}>
					<Text>
						Have an account?{' '}
						<NextLink href="/login">
							<Link textColor="green.400">Sign In</Link>
						</NextLink>
					</Text>
				</Box>
			</Flex>
		</Container>
	)
}

const Success = (): React.ReactElement => {
	return (
		<Center>
			<Flex
				mt={20}
				w="30rem"
				p="2rem"
				alignItems="center"
				flexDirection="column"
				rounded="md"
				shadow="md"
				borderColor="green.500"
				bgColor="green.900">
				<Heading size="xl">Congratulations!</Heading>
				<Text size="xl" p={6}>
					You have successfully signed up! Go to{' '}
					<NextLink href="/login">
						<Link as="a" display="inline" textColor="green.300">
							login page
						</Link>
					</NextLink>
					.
				</Text>
			</Flex>
		</Center>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context)
	console.log('login page session: ', JSON.stringify(session))
	if (session)
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	return { props: {} }
}

export default Register
