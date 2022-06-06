import { Prisma, User } from '@prisma/client'
import { Without } from '../prismaClient'

export type Data =
	| (Without<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput> & Prisma.UserUncheckedCreateInput)
	| (Prisma.Without<Prisma.UserUncheckedCreateInput, Prisma.UserCreateInput> & Prisma.UserCreateInput)

export type Relation = keyof Prisma.UserInclude

export type Field = keyof User

export type UserKey<K extends Field> = User[K]

