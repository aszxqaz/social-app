import { Flex, Box, Switch, Text, Circle, Link } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { DEFAULT_AVATAR } from '../../content/images'
import { NextLink } from '../../easy-imports'
import { PROFILE_ROUTE } from '../../routes'
import { ProfileInfo as ProfileInfoProps } from '../../redux/features/userSlice'

const ProfileInfo: React.FC<ProfileInfoProps & { online: boolean }> = ({ avatar, firstName, lastName, online, id }) => {
	const circleStyle = online
		? {
				bg: 'linear-gradient(135deg, rgba(164,179,87,1) 0%, rgba(117,137,12,1) 100%);',
				boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75);',
		  }
		: {
				bg: 'linear-gradient(135deg, rgba(99,95,88,1) 0%, rgba(64,64,64,1) 100%);',
				boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75);',
		  }
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
							<Circle size="0.75rem" shadow="md" {...circleStyle} />
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
