import { Divider } from '@chakra-ui/react'
import React from 'react'
import useSWR from 'swr'
import ProfileInfo from '../Index/ProfileInfo'
import { mockLastSeen } from '../Profile/utils/lastSeen'
import { User } from '@prisma/client'
import { userService } from '../../prisma/user/userService'

interface UsersListProps {
	children?: React.ReactNode
}

export type UsersList = Awaited<ReturnType<typeof userService['getAllUsers']>>
export type Item<T> = T extends Array<infer A> ? A : never


export const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json())

const UsersList: React.FC<UsersListProps> = ({}) => {
	const { data, error } = useSWR<UsersList>('/api/users', fetcher)
	return (
		<>
			{data?.map((user, i) => (
				<>
					<ProfileInfo key={user.id} {...user} />
					{i !== data.length - 1 ? <Divider /> : null}
				</>
			))}
		</>
	)
}

export default UsersList
