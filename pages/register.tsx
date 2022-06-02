import { Box, Flex, Heading } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { DarkModeSwitch } from '../chakra/DarkModeSwitch'
import { RegisterForm, Success } from '../components/Register'
import { useRegisterHandler } from '../handlers/useRegisterHandler'
import { useAuthRedirect } from '../hooks/useAuthRedirect'

const Register: React.FC = ({}) => {
	const { signUpStatus, onSubmit } = useRegisterHandler()
	useAuthRedirect(null, '/')
	return (
		<Flex flexDir="column" mx="auto" width="80%" mb="100px">
			<Box>
				<Image src="/logo/rocket.png" width={546} height={311} alt="Rocket application logo" />
			</Box>
			<Heading
				letterSpacing={2}
				textTransform="uppercase"
				textAlign="center"
        colorScheme="green"
				mb={2}
				size="lg">
				REGISTER
			</Heading>
			{signUpStatus === 'success' ? <Success /> : <RegisterForm onSubmit={onSubmit} />}
		</Flex>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context)
	// console.log('login page session: ', JSON.stringify(session))
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
