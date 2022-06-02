import type { GetServerSideProps, NextPage } from 'next'
import { getToken } from 'next-auth/jwt'
import { DarkModeSwitch } from '../chakra/DarkModeSwitch'
import Header from '../components/Index/Header'
import ProfileInfo, { ProfileInfoProps } from '../components/Index/ProfileInfo'
import { useAuthRedirect } from '../hooks/useAuthRedirect'
import { LOGIN_ROUTE } from '../routes'

interface HomePageProps {
	profilePageProps: ProfileInfoProps
}

const Home: NextPage<HomePageProps> = ({ profilePageProps }) => {
	const { status } = useAuthRedirect(LOGIN_ROUTE)
	console.log(status)

	if (status === 'authenticated')
		return (
			<>
				<Header />
				<ProfileInfo {...profilePageProps} />
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
				image: '/me.jpg' || token?.picture,
				online: true,
			},
		},
	}
}

export default Home
