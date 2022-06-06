import { Divider } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import { getToken } from 'next-auth/jwt'
import { useRouter } from 'next/router'
import { DarkModeSwitch } from '../chakra/DarkModeSwitch'
import Header from '../components/Index/Header'
import ProfileInfo from '../components/Index/ProfileInfo'
import UsersList from '../components/UsersList/UsersList'
import { useAuthRedirect } from '../hooks/useAuthRedirect'
import { LOGIN_ROUTE } from '../routes'

interface HomePageProps {
	firstName: string
	lastName: string
	avatar: string
	id: string
}

const Home: NextPage<HomePageProps> = (props) => {
	const router = useRouter()

	const { status } = useAuthRedirect(LOGIN_ROUTE)

	if (status === 'authenticated')
		return (
			<>
				<Header />
				{router.asPath === '/users' ? <UsersList /> : null}
				<Divider />
				{/* <DarkModeSwitch /> */}
			</>
		)
	return null
}

export const getServerSideProps: GetServerSideProps = async ({
	req,
}): Promise<{ props: HomePageProps } | { props: {} }> => {
	const token = await getToken({ req } as { req: any })

	if (!token)
		return {
			props: {},
		}

	return {
		props: {
			firstName: token.firstName,
			lastName: token.lastName,
			avatar: token.picture,
			id: token.sub,
		},
	}
}

export default Home
