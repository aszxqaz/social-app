import { Box, Flex, FlexProps } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { APP_LOGO_LARGE } from '../content/images'

type WrapperProps = {
	children?: React.ReactNode
} & FlexProps

export const Wrapper: React.FC<WrapperProps> = ({ children, ...flexProps }) => {
	return (
		<Flex flexDir="column" mx="auto" width="80%" {...flexProps}>
			<Box>
				<Image src={APP_LOGO_LARGE} width={546} height={311} alt="Rocket application logo" />
			</Box>
			{children}
		</Flex>
	)
}
