import type { GetServerSideProps, NextPage } from 'next'
import { getToken } from 'next-auth/jwt'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import HeaderFactory from '../components/Index/Header'
import UsersList from '../components/UsersList/UsersList'
import { headerMenu_IndexPage, HEADER_MENU_INDEX_PAGE_ITEMS } from '../content/index/headerMenu'
import { useAuthRedirect } from '../hooks/useAuthRedirect'
import { userService } from '../prisma/user/userService'
import { REDIRECT_TO_LOGIN } from '../reponses'
import { LOGIN_ROUTE } from '../routes'

export type Users = Awaited<ReturnType<typeof userService['getAllUsers']>>

export type UsersPageProps = {
	users: Users
}

const UsersPage: NextPage<UsersPageProps> = (props) => {
	const { status } = useAuthRedirect(LOGIN_ROUTE)
	const Header = HeaderFactory<HEADER_MENU_INDEX_PAGE_ITEMS>()

	if (status === 'authenticated')
		return (
			<>
				<Header headerMenu={headerMenu_IndexPage} />
				<UsersList />
				{/* <DarkModeSwitch /> */}
			</>
		)
	return null
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const token = await getToken({ req } as { req: any })
	const session = await getSession({ req })

	if (!session || !token || !token.sub) return REDIRECT_TO_LOGIN

	const users = await userService.getAllUsers()

	if (!token)
		return {
			props: {},
		}

	return {
		props: {
			users,
		},
	}
}

export default UsersPage
