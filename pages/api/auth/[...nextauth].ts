import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { userService } from '../../../typeorm'
import { UpstashRedisAdapter } from '@next-auth/upstash-redis-adapter'
import { Redis } from '@upstash/redis'

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
        console.log(email)
				const user = await userService.findUser([{ email }])
        console.log(user)
				if (!user) return null
				if (user.password === credentials.password)
					return {
						name: `${user.firstName} ${user.lastName}`,
						id: user.id,
						image: user.images?.[0] || null,
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
			// if (user) {
			// 	token.sub = user.id
			// 	token.name = user.name
			// 	token.picture = user.image
			// }
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
			return session
		},
	},
	jwt: {},
	pages: {
		signIn: '/login',
		error: '/login',
	},
})

// pages: {
//   signIn: '/auth/signin',
//   signOut: '/auth/signout',
//   error: '/auth/error', // Error code passed in query string as ?error=
//   verifyRequest: '/auth/verify-request', // (used for check email message)
//   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
// }
