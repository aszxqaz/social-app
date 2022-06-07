import { Divider } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ProfileInfo from '../Index/ProfileInfo'
import Search from './Search'
import { startsWith } from './startsWith'
import { UsersList } from './UsersList'

type UsersProps = {
	users: {
		avatar: string | null
		firstName: string
		lastName: string
		online: boolean | null
		id: string
	}[]
}

const Users: React.FC<UsersProps> = ({ users }) => {
	const [searchQuery, setSearchQuery] = useState('')
	const [filteredUsers, setFilteredUsers] = useState(users)
	const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setSearchQuery(e.target.value)
	}
	useEffect(() => {
		if (users) {
			setFilteredUsers(_ =>
				users.filter((user) => startsWith(user.firstName, searchQuery) || startsWith(user.lastName, searchQuery)),
			)
		}
	}, [users, searchQuery])
	return (
		<>
			<Search value={searchQuery} onChange={onChange} />
			<Divider />
			{filteredUsers?.map((user, i) => (
				<>
					<ProfileInfo key={user.id} {...user} />
					<Divider />
				</>
			))}
		</>
	)
}

export default Users
