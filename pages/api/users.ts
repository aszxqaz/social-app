import { NextApiRequest, NextApiResponse } from 'next'
import { userService } from '../../typeorm/setup'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const users = await userService.findAll()
	res.status(200).json(users)
}
