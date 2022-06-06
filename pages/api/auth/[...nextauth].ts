import { verify } from 'argon2'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { onlineService } from '../../../prisma/user/onlineService'
import { userService } from '../../../prisma/user/userService'
import { LOGIN_ROUTE } from '../../../routes'

// const redis = new Redis({
// 	url: 'https://eu2-moved-mutt-30230.upstash.io',
// 	token:
// 		'AXYWACQgODU5ZDM4MTQtNjE3YS00ZmIwLTgyMzUtNzYzNTU0OGYwZDAyODU0NWEyMjdiNjgyNDNhOGFlZjMxMjA2MGIwMDQwMjU=',
// })

export default NextAuth({
	// adapter: UpstashRedisAdapter(redis),
	providers: [
		Credentials({
			credentials: {
				email: { type: 'text' },
				password: { type: 'password' },
			},
			async authorize(credentials, req) {
				if (!credentials) return null
				const { email, password } = credentials
				const user = await userService.findUniqueWhere({ email })
				if (!user) return null

				const verified = await verify(user.password, password)
				if (verified) {
					return {
						firstName: user.firstName,
						lastName: user.lastName,
						id: user.id,
						image: user.avatar,
					}
				}
				return null
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		jwt: ({ token, user, account, profile, isNewUser }) => {
			// console.log(`--- Jwt callback`)
			// console.log(`token: ${JSON.stringify(token)}`)
			// console.log(`user: ${JSON.stringify(user)}`)
			// console.log(`account: ${JSON.stringify(account)}`)
			// console.log(`profile: ${JSON.stringify(profile)}`)
			// console.log(`isNewUser: ${JSON.stringify(isNewUser)}`)
			// console.log(` `)
			if (user) {
				token.sub = user.id
				token.firstName = user.firstName

				token.lastName = user.lastName
				token.picture = user.image
			}
			return token
		},
		session: ({ session, user, token }) => {
			// console.log(`--- Session callback`)
			// console.log(`session: ${JSON.stringify(session)}`)
			// console.log(`user: ${JSON.stringify(user)}`)
			// console.log(`token: ${JSON.stringify(token)}`)
			// console.log(` `)
			// if (token) {
			// 	session.id = token.id
			// }
			if (token?.sub) onlineService.update(token.sub)
			return session
		},
	},
	jwt: {},
	pages: {
		signIn: LOGIN_ROUTE,
		error: LOGIN_ROUTE,
	},
})

// pages: {
//   signIn: '/auth/signin',
//   signOut: '/auth/signout',
//   error: '/auth/error', // Error code passed in query string as ?error=
//   verifyRequest: '/auth/verify-request', // (used for check email message)
//   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
// }
