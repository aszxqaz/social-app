import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'
import { followService } from '../../prisma/user/followService'

export default async function sendFriendRequest(req: NextApiRequest, res: NextApiResponse) {
	const token = await getToken({ req })
	if (!token || !token.sub) return res.status(401).end()
	const { uid } = req.query

	const isRequestSent = await followService.delete(token.sub, uid as string)

	if (!isRequestSent) return res.status(400).end()
	return res.status(200).end()
}
