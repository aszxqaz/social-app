import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'
import { followService } from '../../prisma/user/followService'
import { userService } from '../../prisma/user/userService'

export default async function acceptFriendRequest(req: NextApiRequest, res: NextApiResponse) {
	const token = await getToken({ req })
	console.log(token)
	if (!token || !token.sub) return res.status(401).end()
	const { uid } = req.query

	const isRequestAccepted = await followService.acceptFriendRequest(uid as string, token.sub)

	if (!isRequestAccepted) return res.status(400).end()

	return res.status(200).end()
}
