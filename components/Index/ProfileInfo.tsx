import { Flex, Text } from '@chakra-ui/react'
import { User } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
import { DEFAULT_AVATAR } from '../../content/images'
import { NextLink } from '../../easy-imports'
import { PROFILE_ROUTE } from '../../routes'
import OnlineCircle from './OnlineCircle'

const ProfileInfo: React.FC<Partial<User>> = ({ avatar, firstName, lastName, online, id }) => {
	return (
		<NextLink href={`${PROFILE_ROUTE}/${id}`}>
			<a>
				<Flex p={1} _hover={{ backgroundColor: '#2a3141' }} fontSize="large">
					<Flex rounded="xs" overflow="hidden" border="1px" borderColor="white">
						<Image src={avatar || DEFAULT_AVATAR} width="70px" height="70px" objectFit="cover" alt="" />
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
export default ProfileInfo
