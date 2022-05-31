import { error } from 'console'
import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../entities/User'
import { dataSource } from '../../typeorm/setup'

export interface RegistrationError {
	name: 'username' | 'password' | 'email'
	message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	console.log('here')
	if (!dataSource.isInitialized) {
		await dataSource.initialize()
		console.log('Data Source initialized')
	}
	const { email, username, password } = req.body
  console.log(`req.body: `, req)
	const errors: RegistrationError[] = []
	const repo = dataSource.getRepository(User)

	const emailInUse = await repo.findOne({ where: { email } })
	if (emailInUse) errors.push({ name: 'email', message: 'Email is already in use.' })

	const usernameInUse = await repo.findOne({ where: { username } })
	if (usernameInUse) errors.push({ name: 'username', message: 'Username is already in use.' })

	if (errors.length)
		return res.status(400).json({
			statusCode: 400,
			ok: false,
			errors,
		})

	const user = await repo
		.create({
			email,
			username,
			password,
		})
		.save()

	res.status(200).json({
		statusCode: 201,
		ok: true,
	})
}
