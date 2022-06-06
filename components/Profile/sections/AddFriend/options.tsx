import { Center } from '@chakra-ui/react'
import { RiArrowRightSLine, RiCheckLine, RiCloseLine, RiDeleteBin5Line } from 'react-icons/ri'

export type FriendshipStatus = 'none' | 'requestedOut' | 'requestedIn' | 'friended'

type AddFriendSectionConfig = { [K in FriendshipStatus]: Record<string, any> }

export const buttonProps: AddFriendSectionConfig = {
	none: {
		children: (
			<Center>
				Add to friends
				<RiArrowRightSLine fontSize="1.5rem" />
			</Center>
		),
	},
	friended: {
		children: (
			<Center>
				<RiDeleteBin5Line fontSize="1.5rem" />
			</Center>
		),
		flexGrow: 2,
		colorScheme: 'red',
	},
	requestedOut: {
		children: (
			<Center>
				<RiCloseLine fontSize="1.5rem" />
        Cancel the request
			</Center>
		),
		colorScheme: 'red',
	},
	requestedIn: {
		children: (
			<Center>
				<RiCheckLine fontSize="1.5rem" />
				Accept the request
			</Center>
		),
		colorScheme: 'green',
	},
}
