import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import React from 'react'
import Authentication from '../../components/authentication'
import { Wrapper } from '../../components/authentication/common'
import { useAuthRedirect } from '../../hooks'
import { MAIN_ROUTE } from '../../routes'

interface AuthenticationPageProps {
	variant: 'login' | 'register'
}

const AuthenticationPage: React.FC<AuthenticationPageProps> = ({ variant }) => {
	useAuthRedirect(null, MAIN_ROUTE)

	return (
		<Wrapper gap={2} maxW="20rem">
			<Authentication key={'authentication'} variant={variant} />
		</Wrapper>
	)
}

export const getServerSideProps: GetServerSideProps<AuthenticationPageProps> = async ({ req, query }) => {
	const session = await getSession({ req })
	let variant
	if (query['variant'] === 'login' || query['variant'] === 'register')
		variant = query['variant'] as 'login' | 'register'

	if (session || !variant) {
		return {
			redirect: {
				destination: MAIN_ROUTE,
				permanent: false,
			},
		}
	}

	return {
		props: { variant },
	}
}

export default AuthenticationPage
