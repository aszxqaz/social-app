import { PrismaClient } from '@prisma/client'
import { prisma } from '../prismaClient'
import { UserKey } from './types'
import { userService } from './userService'

class FollowService {
	constructor(private prismaClient: PrismaClient) {}

	async sendFriendRequest(from: UserKey<'id'>, to: UserKey<'id'>) {
		try {
			const alreadySent = await this.prismaClient.followRequests.findFirst({
				where: {
					OR: [
						{
							senderId: from,
							receiverId: to,
						},
						{
							senderId: to,
							receiverId: from,
						},
					],
				},
			})

			if (alreadySent) return null

			await this.prismaClient.followRequests.create({
				data: {
					senderId: from,
					receiverId: to,
				},
			})
		} catch (e) {
			console.log(e)
			return null
		}

		return true
	}

	async acceptFriendRequest(from: UserKey<'id'>, to: UserKey<'id'>) {
		try {
			await this.prismaClient.followRequests.delete({
				where: {
					senderId_receiverId: {
						senderId: from,
						receiverId: to,
					},
				},
			})

			await this.prismaClient.follows.create({
				data: {
					followerId: from,
					followingId: to,
				},
			})
		} catch (e) {
			console.error(e)
			return null
		}

		return true
	}

	async getFriendRequests(userId: UserKey<'id'>) {
		return await this.prismaClient.followRequests.findMany({
			where: {
				OR: [
					{
						receiverId: userId,
					},
					{
						senderId: userId,
					},
				],
			},
		})
	}

	async getFriends(userId: UserKey<'id'>) {
		return await this.prismaClient.follows.findMany({
			where: {
				OR: [
					{
						followerId: userId,
					},
					{
						followingId: userId,
					},
				],
			},
		})
	}

	async delete(from: UserKey<'id'>, to: UserKey<'id'>) {
		try {
			const found = await this.prismaClient.follows.findFirst({
				where: {
					OR: [
						{
							followerId: from,
							followingId: to,
						},
						{
							followerId: to,
							followingId: from,
						},
					],
				},
			})
			if (!found) return null
			await this.prismaClient.follows.delete({
				where: {
					followerId_followingId: {
						followerId: found.followerId,
						followingId: found.followingId,
					},
				},
			})
		} catch (e) {
			console.error(e)
			return null
		}
		return true
	}

	async cancel(from: UserKey<'id'>, to: UserKey<'id'>) {
		try {
			await this.prismaClient.followRequests.delete({
				where: {
					senderId_receiverId: {
						senderId: from,
						receiverId: to,
					},
				},
			})
		} catch (e) {
			console.error(e)
			return null
		}
		return true
	}

	async getFriendsAndFriendRequests(userId: UserKey<'id'>) {
		try {
			const friends = await this.getFriendsList(userId)
			const incomingRequests = await this.getIncomingRequests(userId)
			const outcomingRequests = await this.getOutcomingRequests(userId)
			return { friends, incomingRequests, outcomingRequests }
		} catch (e) {
			console.log(e)
			return null
		}
	}

	async getFriendsList(id: UserKey<'id'>) {
		return await this.prismaClient.user.findMany({
			where: {
				OR: [
					{
						following: {
							some: {
								OR: [
									{
										followerId: id,
									},
									{
										followingId: id,
									},
								],
							},
						},
					},
				],
			},
			select: {
				id: true,
				firstName: true,
				lastName: true,
				avatar: true,
				online: true,
				lastSeen: true,
			},
		})
	}

	async getOutcomingRequests(id: UserKey<'id'>) {
		return await this.prismaClient.user.findMany({
			where: {
				followRequestsOut: {
					some: {
						senderId: id,
					},
				},
			},
			select: {
				id: true,
				firstName: true,
				lastName: true,
				avatar: true,
				online: true,
				lastSeen: true,
			},
		})
	}

	async getIncomingRequests(id: UserKey<'id'>) {
		return await this.prismaClient.user.findMany({
			where: {
				followRequestsIn: {
					some: {
						receiverId: id,
					},
				},
			},
			select: {
				id: true,
				firstName: true,
				lastName: true,
				avatar: true,
				online: true,
				lastSeen: true,
			},
		})
	}
}

export const followService = new FollowService(prisma)
