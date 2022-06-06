import { Prisma, PrismaClient, User } from '@prisma/client'
import { prismaClient, Without } from '../prismaClient'
import { followService } from './followService'
import { Data, Field, UserKey, Relation } from './types'

class UserService {
	constructor(private prismaClient: PrismaClient) {}

	async create(data: Data) {
		try {
			const user = await this.prismaClient.user.create({ data })
			return user
		} catch (e) {
			console.log(e)
			return null
		}
	}

	async findUnique(args: Prisma.UserFindUniqueArgs): Promise<User | null> {
		try {
			return await this.prismaClient.user.findUnique(args)
		} catch (e) {
			console.log(e)
			return null
		}
	}

	async findUniqueWhere(where: Prisma.UserWhereUniqueInput) {
		return await this.findUnique({ where })
	}

	async findOne(args: Prisma.UserFindFirstArgs) {
		try {
			return await this.prismaClient.user.findFirst(args)
		} catch (e) {
			console.log(e)
			return null
		}
	}

	async getAllUsers() {
		return await this.prismaClient.user.findMany({
			select: {
				avatar: true,
				firstName: true,
				lastName: true,
				lastSeen: true,
				online: true,
				id: true,
			},
		})
	}

	async getUserProfile(id: UserKey<'id'>) {
		return await this.prismaClient.user.findUnique({
			where: { id },
			select: {
				id: true,
				firstName: true,
				lastName: true,
				avatar: true,
				lastSeen: true,
				online: true,
			},
		})
	}

	async getUserProfileWithFriends(id: UserKey<'id'>) {
		const profile = await this.getUserProfile(id)
		if (!profile) return null
		const friends = await followService.getFriends(id)
		const friendRequests = await followService.getFriendRequests(id)
		return {
			...profile,
			friends,
			friendRequests,
		}
	}
}

export const userService = new UserService(prismaClient)
