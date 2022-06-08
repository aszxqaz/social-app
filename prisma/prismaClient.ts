import { Prisma, PrismaClient } from '@prisma/client'

declare global {
	// allow global `var` declarations
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined
}

export const prisma =
	global.prisma ||
	new PrismaClient({
		log: ['query'],
	})

if (process.env.NODE_ENV !== 'production') global.prisma = prisma

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

// export const prisma = new PrismaClient()