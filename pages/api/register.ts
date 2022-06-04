import { NextApiRequest, NextApiResponse } from 'next'
import { SignUpData } from '../../components/authentication/content'
import { userService } from '../../typeorm'

export interface RegistrationError {
	name: keyof SignUpData
	message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { email, firstName, lastName, password } = req.body

	const emailInUse = await userService.findUser({ email })
  
	if (emailInUse)
		return res.status(400).json({
			error: 'Email is already in use',
		})

	await userService.createUser({
		email,
		firstName,
		lastName,
		password,
	})

	res.status(200).json({
		statusCode: 201,
		ok: true,
	})
}
