import type { GetServerSideProps, NextPage } from 'next'
import { getToken, GetTokenParams } from 'next-auth/jwt'
import { getSession } from 'next-auth/react'
import Friends from '../components/Friends/Friends'
import { followService } from '../prisma/user/followService'
import { REDIRECT_TO_LOGIN } from '../reponses'

export type FriendsAndFriendRequests = Exclude<
	Awaited<ReturnType<typeof followService['getFriendsAndFriendRequests']>>,
	null
>
export type FriendsPageProps = FriendsAndFriendRequests

const FriendsPage: NextPage<FriendsPageProps> = (props) => {
	return <Friends {...props} />
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
	const session = await getSession({ req })
	const token = await getToken({ req } as GetTokenParams)

	if (!session || !token || !token.sub) return REDIRECT_TO_LOGIN

	const friendsInfo = await followService.getFriendsAndFriendRequests(token.sub)

	console.log(friendsInfo)
	return {
		props: {
			...friendsInfo,
			me: {
				id: token.sub,
			},
		},
	}
}

export default FriendsPage
