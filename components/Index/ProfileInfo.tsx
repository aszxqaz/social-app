import { Flex, Box, Switch, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export interface ProfileInfoProps {
	fullname: string
	image: string
	online: boolean
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ image, fullname, online }) => {
	const switchStyle = online
		? {
				text: 'Online',
				textColor: 'green',
		  }
		: {
				text: 'Offline',
				textColor: 'red',
		  }
	return (
		<Flex p={3}>
			<Flex rounded="full" overflow="hidden" border="1px" borderColor="white">
				<Image src={image} width="60px" height="60px" objectFit="cover" alt="" />
			</Flex>
			<Flex alignItems="center" justifyContent="left" flexGrow={1} pl={5}>
				<Text>{fullname}</Text>
			</Flex>
			<Flex alignItems="center" justifyContent="left" pl={5}>
				<Flex gap={3} alignItems="center" justifyContent="left"  >
					<Switch colorScheme="green" isChecked={online} />
					<Text textColor={switchStyle.textColor}>{switchStyle.text}</Text>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default ProfileInfo
