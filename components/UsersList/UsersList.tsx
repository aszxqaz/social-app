import React from 'react'
import useSWR from 'swr'
import { userService } from '../../prisma/user/userService'
import Users from './Users'

interface UsersListProps {
	children?: React.ReactNode
}

export type UsersList = Awaited<ReturnType<typeof userService['getAllUsers']>>
export type Item<T> = T extends Array<infer A> ? A : never

export const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json())

const UsersList: React.FC<UsersListProps> = ({}) => {
	const { data, error } = useSWR<UsersList>('/api/users', fetcher)
	return data ? <Users users={data} /> : null
}

export default UsersList
