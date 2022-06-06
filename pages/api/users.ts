import { NextApiRequest, NextApiResponse } from 'next'
import { userService } from '../../prisma/user/userService'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const users = await userService.getAllUsers()
	res.status(200).json(users)
}
