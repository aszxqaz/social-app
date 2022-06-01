import { Box, Center, ChakraProps, Text } from '@chakra-ui/react'
import React from 'react'
import { Category } from '../../content/profile/categories'
import { FlexCenter } from '../../ui'

const TileCategory: React.FC<Category & ChakraProps> = ({ title, count, ...rest }) => {
	return (
		<Center fontSize="xl" px={2} py={3} rounded="xl" {...rest}>
			<FlexCenter flexDir="column">
        <Center><Text>{title}</Text></Center>
        <Center><Text textColor="whiteAlpha.500">{count}</Text></Center>
      </FlexCenter>

		</Center>
	)
}

export default TileCategory
