import { Box, Center, Container, Heading } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { RegisterForm, Success } from '../components/Register'
import { useRegisterHandler } from '../handlers/useRegisterHandler'
import { useAuthRedirect } from '../hooks/useAuthRedirect'
import { FlexCenter } from '../ui'

const Register: React.FC = ({}) => {
	const { signUpStatus, onSubmit } = useRegisterHandler()
	useAuthRedirect(null, '/')
	return (
		<FlexCenter flexDir="column" mx="auto" width="80%">
			<Box>
				<Image src="/logo/rocket.png" width={546} height={311} alt="Rocket application logo"/>
			</Box>
			<Heading
				letterSpacing={2}
				textTransform="uppercase"
				textAlign="center"
				textColor="#9ae6b4"
        mb={2}
				size="lg">
				REGISTER
			</Heading>
			{signUpStatus === 'success' ? <Success /> : <RegisterForm onSubmit={onSubmit} />}
		</FlexCenter>
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
