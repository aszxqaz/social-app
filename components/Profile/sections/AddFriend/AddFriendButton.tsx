import { Box, Button, ChakraProps } from '@chakra-ui/react'
import React from 'react'
import { RiArrowRightSLine, RiCheckLine, RiDeleteBin5Line } from 'react-icons/ri'
import { buttonProps } from './options'

export type AddFriendButtonProps =
	| {
			mode: 'requestedIn' | 'none'
			handleClick: (...args: any[]) => any
			isLoading: boolean
	  }
	| {
			mode: 'requestedOut'
			handleClick?: never
			isLoading?: never
	  }

const AddFriendButton: React.FC<AddFriendButtonProps & ChakraProps> = ({ mode, handleClick, isLoading, ...rest }) => {
	return <Button w="100%" isLoading={isLoading} onClick={handleClick} {...buttonProps[mode]} {...rest} />
}

export default AddFriendButton
