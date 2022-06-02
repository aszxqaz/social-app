import { NextApiRequest, NextApiResponse } from 'next'
import { SignUpData } from '../../components/authentication/content'
import { userService } from '../../typeorm'

export interface RegistrationError {
	name: keyof SignUpData
	message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { email, firstName, lastName, password } = req.body
	const errors: RegistrationError[] = []

	const emailInUse = await userService.findUser({ email })
	if (emailInUse) errors.push({ name: 'email', message: 'Email is already in use.' })

	if (errors.length)
		return res.status(400).json({
			statusCode: 400,
			ok: false,
			errors,
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
