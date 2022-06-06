import { PrismaClient } from '@prisma/client'
import { prismaClient } from '../prismaClient'
import { UserKey } from './types'

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
}

export const followService = new FollowService(prismaClient)
