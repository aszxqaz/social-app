import { NextApiRequest, NextApiResponse } from 'next'
import { SignUpData } from '../../components/authentication/content'
import { prismaClient } from '../../prisma/prismaClient'
import { userService } from '../../prisma/user/userService'
import { hash } from 'argon2'

export interface RegistrationError {
	name: keyof SignUpData
	message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { email, firstName, lastName, password } = req.body

	// const emailInUse = await userService.findUser({ email })
	const emailInUse = await prismaClient.user.findUnique({ where: { email } })

	if (emailInUse)
		return res.status(400).json({
			error: 'Email is already in use',
		})

	const hashed = await hash(password, { saltLength: 10 })

	const created = await prismaClient.user.create({ data: { email, firstName, lastName, password: hashed } })

	// await userService.createUser({
	// 	email,
	// 	firstName,
	// 	lastName,
	// 	password,
	// })

	res.status(200).json({
		statusCode: 201,
		ok: true,
	})
}
