import { PrismaClient, User } from '@prisma/client'
import { prismaClient } from '../prismaClient'
import { UserKey } from './types'

export class OnlineService {
	private TIME_ELAPSED_TO_SET_OFFLINE = 1000 * 60
	private _map = new Map<UserKey<'id'>, NodeJS.Timeout>()
	constructor(private prismaClient: PrismaClient) {}

	async update(userId: UserKey<'id'>) {
		await prismaClient.user.update({
			where: { id: userId },
			data: {
				lastSeen: new Date(),
				online: true,
			},
		})
		clearTimeout(this._map.get(userId))
		const timeout = setTimeout(async () => {
			await prismaClient.user.update({
				where: { id: userId },
				data: {
					online: false,
				},
			})
			clearTimeout(this._map.get(userId))
		}, this.TIME_ELAPSED_TO_SET_OFFLINE)
		this._map.set(userId, timeout)
	}
}

export const onlineService = new OnlineService(prismaClient)
