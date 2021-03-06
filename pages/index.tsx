import { Divider } from '@chakra-ui/react'
import type { GetServerSideProps, NextPage } from 'next'
import { getToken } from 'next-auth/jwt'
import { useRouter } from 'next/router'
import HeaderFactory from '../components/Index/Header'
import MainMenu from '../components/Index/Menu'
import UsersList from '../components/UsersList/UsersList'
import { headerMenu_IndexPage, HEADER_MENU_INDEX_PAGE_ITEMS } from '../content/index/headerMenu'
import { mainMenuContent } from '../content/index/mainMenu'
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
	const Header = HeaderFactory<HEADER_MENU_INDEX_PAGE_ITEMS>()

	if (status === 'authenticated')
		return (
			<>
				<Header headerMenu={headerMenu_IndexPage} />
				<MainMenu items={mainMenuContent} />
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
