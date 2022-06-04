import { NextApiRequest, NextApiResponse } from 'next'
import { userService } from '../../typeorm'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log(req.query)
}
