import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'
import { followService } from '../../prisma/user/followService'

export default async function cancelFriendRequest(req: NextApiRequest, res: NextApiResponse) {
	const token = await getToken({ req })
	console.log(token)
	if (!token || !token.sub) return res.status(401).end()
	const { uid } = req.query

	const isRequestAccepted = await followService.cancel(token.sub, uid as string)

	if (!isRequestAccepted) return res.status(400).end()

	return res.status(200).end()
}
