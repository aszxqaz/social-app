import { Box, Button, ChakraProps } from '@chakra-ui/react'
import { useState } from 'react'
import { axios } from '../../../../axios'
import { ProfilePageProps } from '../../../../pages/profile/[id]'
import { getFriendshipStatus } from './getFriendshipStatus'
import { buttonProps } from './options'
import { FRIEND_ROUTES, NEXT_MODES } from './routes'

export type AddFriendSectionProps = Pick<ProfilePageProps, 'friendRequests' | 'friends' | 'id'> & {
	meId: string
} & ChakraProps

export type FriendshipStatus = 'none' | 'requestedOut' | 'requestedIn' | 'friended'

const AddFriendSection: React.FC<AddFriendSectionProps> = ({ friendRequests, friends, id, meId, ...rest }) => {
	const [isLoading, setIsLoading] = useState(false)
	const [mode, setMode] = useState<FriendshipStatus>(getFriendshipStatus(friends, friendRequests, meId))

	const handleClick = async () => {
		setIsLoading(true)
		const res = await axios.post(`${FRIEND_ROUTES[mode]}?uid=${id}`)
		if (res) {
			console.log('here')
			setMode(`${NEXT_MODES[mode]}`)
			setIsLoading(false)
		}
	}

	return <Button isLoading={isLoading} onClick={handleClick} {...rest} {...buttonProps[mode]}  />
}

export default AddFriendSection
