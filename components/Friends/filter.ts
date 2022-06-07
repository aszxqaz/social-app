import { FriendsPageProps } from '../../pages/friends'

export const filterOnline = (friends: FriendsPageProps['friends']) => {
	return friends.filter((user) => !!user.online)
}
