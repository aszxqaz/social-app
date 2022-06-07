import { Divider } from '@chakra-ui/react'
import { User } from '@prisma/client'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useAuthRedirect } from '../../hooks'
import { FriendsPageProps } from '../../pages/friends'
import { LOGIN_ROUTE } from '../../routes'
import HeaderFactory from '../Index/Header'
import Users from '../UsersList/Users'
import { filterOnline } from './filter'
import { headerMenu_FriendsPage, HEADER_MENU_FRIENDS_PAGE_ITEMS } from './headerMenuFriendsPageItems'

export type Tabs = HEADER_MENU_FRIENDS_PAGE_ITEMS

const Friends: React.FC<FriendsPageProps> = ({ friends, incomingRequests, outcomingRequests }) => {
	const { status } = useAuthRedirect(LOGIN_ROUTE)
	const [users, setUsers] = useState<FriendsPageProps['friends']>(friends)

	if (status === 'authenticated') {
		const Header = HeaderFactory<HEADER_MENU_FRIENDS_PAGE_ITEMS>()

		headerMenu_FriendsPage.Friends.onClick = () => setUsers(friends)
		headerMenu_FriendsPage.Online.onClick = () => setUsers(filterOnline(friends))
		headerMenu_FriendsPage['Incoming requests'].onClick = () => setUsers(incomingRequests)
		headerMenu_FriendsPage['Outcoming requests'].onClick = () => setUsers(outcomingRequests)

		return (
			<>
				<Header headerMenu={headerMenu_FriendsPage} />
				<Users users={users} />
				<Divider />

				{/* <DarkModeSwitch /> */}
			</>
		)
	}
	return null
}

export default Friends
