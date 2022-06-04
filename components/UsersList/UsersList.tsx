import React from 'react'
import useSWR from 'swr'
import { ProfileInfo as ProfileInfoType } from '../../redux/features/userSlice'
import ProfileInfo from '../Index/ProfileInfo'
import { mockLastSeen } from '../Profile/utils/lastSeen'

interface UsersListProps {
	children?: React.ReactNode
}

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json())

const UsersList: React.FC<UsersListProps> = ({}) => {
	const { data, error } = useSWR<ProfileInfoType[]>('/api/users', fetcher)
	console.log(data)
	return (
		<>
			{data?.map((user) => (
				<ProfileInfo {...user} online={false} key={user.id} lastSeen={mockLastSeen()} />
			))}
		</>
	)
}

export default UsersList
