import { Box, Button, Center, ChakraProps, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { RiMessage2Line } from 'react-icons/ri'
import useSWR from 'swr'
import { fetcher } from '../../UsersList/UsersList'

type OpenDialogButtonProps = (
	| {
			disabled?: never
			reason?: never
			handleClick?: (...args: any[]) => any
	  }
	| {
			disabled?: true
			reason?: string
			handleClick?: never
	  }
) &
	ChakraProps

const OpenDialogButton: React.FC<OpenDialogButtonProps> = ({ disabled, reason, handleClick, ...rest }) => {
	return (
		<Button
			disabled={disabled}
			variant={'outline'}
			title={disabled ? reason : `Go to dialogs`}
			onClick={handleClick}
			{...rest}>
			<Center>
				<RiMessage2Line fontSize="1.5rem" />
			</Center>
		</Button>
	)
}

export default OpenDialogButton
