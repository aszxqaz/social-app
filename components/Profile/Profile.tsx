import { Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import { CATEGORIES } from '../../content/profile/categories'
import { ProfileContext } from '../../pages/profile/[id]'
import AddFriendButton, { AddFriendButtonProps } from './sections/AddFriend/AddFriendButton'
import AddFriendSection from './sections/AddFriend/AddFriendSection'
import Categories from './sections/Categories'
import OpenDialogButton from './sections/OpenDialogButton'
import ProfileHeader from './sections/ProfileHeader'

const Profile: React.FC = () => {
	const { me, friendRequests, friends, firstName, lastName, avatar, id, online } = useContext(ProfileContext)

	return (
		<>
			<ProfileHeader />
			{me.id !== id ? (
				<>
					<Flex px={4} pt={6} gap={4}>
						<AddFriendSection
							px={"auto"}
							flexGrow={10}
							meId={me.id}
							id={id}
							friendRequests={friendRequests}
							friends={friends}
						/>
						<OpenDialogButton flexGrow={8} px={"auto"} />
					</Flex>
					<Categories categories={CATEGORIES} />
				</>
			) : null}
		</>
	)
}

export default Profile
