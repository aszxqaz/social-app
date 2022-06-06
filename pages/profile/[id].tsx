import React, { createContext, useContext } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { Profile } from '../../components/Profile'
import { mockLastSeen } from '../../components/Profile/utils/lastSeen'
import { getSession } from 'next-auth/react'
import { getToken, GetTokenParams } from 'next-auth/jwt'
import { userService } from '../../prisma/user/userService'
import { REDIRECT_TO_LOGIN, REDIRECT_TO_MAIN } from '../../reponses'
import ProfileInfo from '../../components/Index/ProfileInfo'
import { FollowRequests, Follows, User } from '@prisma/client'

export type ProfileWithFriends = Exclude<Awaited<ReturnType<typeof userService['getUserProfileWithFriends']>>, null>

export type ProfilePageProps = ProfileWithFriends & {
	me: {
		id: string
	}
}

export const ProfileContext = createContext<ProfilePageProps>({} as ProfilePageProps)

const ProfilePage: NextPage<ProfilePageProps> = (props) => {
	return (
		<ProfileContext.Provider value={props}>
			<Profile />
		</ProfileContext.Provider>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
	const { id } = query
	const session = await getSession({ req })
	const token = await getToken({ req } as GetTokenParams)

	if (!session || !token || !token.sub) return REDIRECT_TO_LOGIN
	if (typeof id !== 'string') return REDIRECT_TO_MAIN

	const profileWithFriends = await userService.getUserProfileWithFriends(id) // profile of the user whose id in the query

	if (profileWithFriends === null) return REDIRECT_TO_MAIN
	console.log(profileWithFriends)
	return {
		props: {
			...profileWithFriends,
			me: {
				id: token.sub,
			},
		},
	}
}

export default ProfilePage
