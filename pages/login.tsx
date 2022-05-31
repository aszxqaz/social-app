import {
	Box,
	Button,
	Container,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Link,
	Text,
} from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { getSession, signIn, useSession } from 'next-auth/react'
import { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuthRedirect } from '../hooks/useAuthRedirect'

interface SignInData {
	emailOrUsername: string
	password: string
}

type SignInError = {
	name: keyof SignInData
	message: string
}

const Login: React.FC = () => {
	useAuthRedirect({
		whenAuthenticated: '/',
		whenNotAuthenticated: null,
	})

	const [loginError, setLoginError] = useState('')
	const [isSubmitting, setIsSubmitting] = useState(false)
	const {
		register,
		setError,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInData>()

	const submitHandler: SubmitHandler<SignInData> = async (data) => {
		setIsSubmitting(true)
		try {
			// const res = await axios.post('http://localhost:3000/api/login', data)
			const res = await signIn<'credentials'>('credentials', {
				emailOrUsername: data.emailOrUsername,
				password: data.password,
				redirect: false,
				callbackUrl: process.env.NEXTAUTH_URL,
			})
			console.log(res)
			if (!res) {
				setLoginError('Oops, something wrong at the server')
			} else if (res.status === 401) {
				setLoginError('Credentials provided are wrong')
			}
		} catch (e: any) {
			const errors: SignInError[] = e.response.data.errors
			errors.forEach((error) => {
				setError(error.name, { message: error.message })
			})
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<Container>
			<Flex
				as="form"
				gap={2}
				flexDir="column"
				p={10}
				alignItems="center"
				onSubmit={handleSubmit(submitHandler)}>
				<FormControl isInvalid={!!errors.emailOrUsername}>
					<FormLabel htmlFor="email">E-mail or username</FormLabel>
					<Input
						id="emailOrUsername"
						placeholder="E-mail or username"
						{...register('emailOrUsername', {
							required: 'This is required',
						})}
					/>
					<Box w="100%">
						<FormErrorMessage>{errors.emailOrUsername?.message}</FormErrorMessage>
					</Box>
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
					<Box w="100%">
						<FormErrorMessage>{errors.password?.message}</FormErrorMessage>
					</Box>
				</FormControl>
				<Box textColor="red.700" w="100%">
					<Box h="3rem">
						<Text>{loginError}</Text>
					</Box>
					<Button isLoading={isSubmitting} w="100%" colorScheme="green" type="submit">
						Sign In
					</Button>
				</Box>
				<Box mt={2}>
					<Text>
						Not signed up yet?{' '}
						<NextLink href="/register">
							<Link textColor="green.400">Sign Up</Link>
						</NextLink>
					</Text>
				</Box>
			</Flex>
		</Container>
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

export default Login
