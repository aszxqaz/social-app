import { Box, Center, Divider, Flex, Link, VStack } from '@chakra-ui/react'
import React from 'react'
import { MainMenuItem } from '../../content/types'
import { NextLink } from '../../easy-imports'

interface MenuProps {
	items: MainMenuItem[]
}

const MainMenu: React.FC<MenuProps> = ({ items }) => {
	return (
		<Flex direction="column" w="full" alignItems="stretch">
			{items.map((item, i) => {
				const Icon = item.icon
				return (
					<>
						<NextLink {...item.link}>
							<Link _hover={{ cursor: 'pointer' }}>
								<Flex px={5} _hover={{ bgColor: '#aaa' }}>
									<Center>
										<Icon fontSize="2.5rem" />
									</Center>
									<Box alignItems="center" flexGrow="1" fontSize="1.3rem" py={5} pl={5}>
										{item.title}
									</Box>
								</Flex>
							</Link>
						</NextLink>
						{items.length - 1 !== i ? <Divider /> : null}
					</>
				)
			})}
		</Flex>
	)
}

export default MainMenu
