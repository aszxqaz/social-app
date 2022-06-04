import type { GetServerSideProps, NextPage } from 'next'
import { getToken } from 'next-auth/jwt'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { DarkModeSwitch } from '../chakra/DarkModeSwitch'
import Header from '../components/Index/Header'
import ProfileInfo from '../components/Index/ProfileInfo'
import UsersList from '../components/UsersList/UsersList'
import { useAuthRedirect } from '../hooks/useAuthRedirect'
import { LOGIN_ROUTE } from '../routes'
import { ProfileInfo as ProfileInfoProps } from '../redux/features/userSlice'

interface HomePageProps {
	profilePageProps: ProfileInfoProps
}

const Home: NextPage<HomePageProps> = ({ profilePageProps }) => {
	const router = useRouter()

	const { status } = useAuthRedirect(LOGIN_ROUTE)
	console.log(status)

	useEffect(() => {}, [router.asPath])

	if (status === 'authenticated')
		return (
			<>
				<Header />
				{router.asPath === '/users' ? <UsersList /> : <ProfileInfo {...profilePageProps} online={false} />}

				{/* <DarkModeSwitch /> */}
			</>
		)
	return null
}

export const getServerSideProps: GetServerSideProps = async ({
	req,
}): Promise<{ props: HomePageProps } | { props: {} }> => {
	const token = await getToken({ req } as { req: any })

	// console.log('index page session: ', JSON.stringify(token))

	if (!token)
		return {
			props: {},
		}

	return {
		props: {
			profilePageProps: {
				fullname: token?.name!,
				avatar: token?.picture,
				online: false,
			},
		},
	}
}

export default Home
