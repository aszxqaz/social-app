import { PrismaClient } from '@prisma/client'

export const prismaClient = new PrismaClient()


export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };