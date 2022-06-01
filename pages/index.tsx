import type { GetServerSideProps, NextPage } from 'next'
import { getToken } from 'next-auth/jwt'
import Header from '../components/Index/Header'
import ProfileInfo, { ProfileInfoProps } from '../components/Index/ProfileInfo'
import { useAuthRedirect } from '../hooks/useAuthRedirect'

interface HomePageProps {
	profilePageProps: ProfileInfoProps
}

const Home: NextPage<HomePageProps> = ({ profilePageProps }) => {
	const { status } = useAuthRedirect({
		whenAuthenticated: null,
		whenNotAuthenticated: '/login',
	})

	// const token = getToken

	if (status === 'authenticated')
		return (
			<>
				<Header />
				<ProfileInfo {...profilePageProps} />
			</>
		)
	return null
}

export const getServerSideProps: GetServerSideProps = async ({
	req,
}): Promise<{ props: HomePageProps } | { props: {} }> => {
	const token = await getToken({ req } as { req: any })

	console.log('index page session: ', JSON.stringify(token))

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
