import { Prisma } from '@prisma/client'
import { Field, Relation } from '../../prisma/user/types'

// export const REQUIRED_USER_FIELDS: Field[] = ['id', 'firstName', 'lastName', 'avatar']
// export const REQUIRED_USER_RELATIONS: Relation[] = ['friendRequestsIn', 'friendRequestsOut', 'friendedBy', 'friendedOn']

// export type ProfileInfo = Pick<User, typeof REQUIRED_USER_FIELDS[number]> & {
// 	[K in typeof REQUIRED_USER_RELATIONS[number]]: User[]
// }


function remove<T extends new () => any>(b: T, a: (keyof T)[]) {
	const c = { ...b }
	a.forEach((e) => {
		delete c[e]
	})
}
