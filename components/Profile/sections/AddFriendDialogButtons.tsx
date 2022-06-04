import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { RiMessage2Line } from 'react-icons/ri'

interface ButtonsProps {
	children?: React.ReactNode
}

const AddFriendDialogButtons: React.FC<ButtonsProps> = ({}) => {
	return (
		<Flex px={4} pt={6} gap={4}>
			<Box flexGrow={1}>
				<Button w="100%">Add to friends</Button>
			</Box>
			<Box>
				<Button variant={'outline'} px={6} width="100%">
					<span>
						<RiMessage2Line fontSize="1.5rem" />
					</span>
				</Button>
			</Box>
		</Flex>
	)
}

export default AddFriendDialogButtons
