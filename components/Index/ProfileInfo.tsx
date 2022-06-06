import { Flex, Box, Switch, Text, Circle, Link } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { DEFAULT_AVATAR } from '../../content/images'
import { NextLink } from '../../easy-imports'
import { PROFILE_ROUTE } from '../../routes'
import { Item, UsersList } from '../UsersList/UsersList'
import OnlineCircle from './OnlineCircle'

const ProfileInfo: React.FC<Item<UsersList>> = ({ avatar, firstName, lastName, online, id }) => {
	return (
		<NextLink href={`${PROFILE_ROUTE}/${id}`}>
			<a>
				<Flex p={3} _hover={{ backgroundColor: '#2a3141' }} fontSize="large">
					<Flex rounded="full" overflow="hidden" border="1px" borderColor="white">
						<Image src={avatar || DEFAULT_AVATAR} width="60px" height="60px" objectFit="cover" alt="" />
					</Flex>
					<Flex alignItems="center" justifyContent="left" pl={5}>
						<Text>{`${firstName} ${lastName}`}</Text>
					</Flex>
					<Flex alignItems="center" justifyContent="left" pl={5}>
						<Flex gap={1} alignItems="center" justifyContent="left">
							{/* <Switch colorScheme="green" isChecked={online} /> */}
							<OnlineCircle online={!!online} />
							{/* <Text colorScheme={switchStyle.colorScheme}>{switchStyle.text}</Text> */}
						</Flex>
					</Flex>
				</Flex>
			</a>
		</NextLink>
	)
}
//linear-gradient(45deg, rgba(248,80,50,1) 0%, rgba(241,111,92,0.93) 47%, rgba(231,56,39,0.85) 100%);
//linear-gradient(45deg, rgba(77,155,59,1) 0%, rgba(102,179,81,1) 50%, rgba(80,146,58,1) 100%);
export default ProfileInfo
