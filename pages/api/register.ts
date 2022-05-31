import { NextApiRequest, NextApiResponse } from 'next'
import { userService } from '../../typeorm'

export interface RegistrationError {
	name: 'username' | 'password' | 'email'
	message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log('here')
	const { email, username, password } = req.body
	console.log(`req.body: `, req)
	const errors: RegistrationError[] = []

	const emailInUse = await userService.findUser({ email })
	if (emailInUse) errors.push({ name: 'email', message: 'Email is already in use.' })

	const usernameInUse = await userService.findUser({ username })
	if (usernameInUse) errors.push({ name: 'username', message: 'Username is already in use.' })

	if (errors.length)
		return res.status(400).json({
			statusCode: 400,
			ok: false,
			errors,
		})

	await userService.createUser({
		email,
		username,
		password,
	})

	res.status(200).json({
		statusCode: 201,
		ok: true,
	})
}
