import { Box, Flex, Heading } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { LoginForm } from '../components/Login/LoginForm'
import { useLoginHandler } from '../handlers/useLoginHandler'
import { useAuthRedirect } from '../hooks/useAuthRedirect'

const Login: React.FC = () => {
	const { error, onSubmit } = useLoginHandler()
	useAuthRedirect(null, '/login')

	return (
		<Flex flexDir="column" mx="auto" width="80%">
			<Box>
				<Image src="/logo/rocket.png" width={546} height={311} alt="Rocket application logo" />
			</Box>
			<Heading
				letterSpacing={2}
				textTransform="uppercase"
				textAlign="center"
				textColor="#9ae6b4"
				mb={2}
				size="lg">
				LOGIN
			</Heading>
			<LoginForm onSubmit={onSubmit} />
			{error}
		</Flex>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context)
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
