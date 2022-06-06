import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import NextImage from 'next/image'
import React, { useContext } from 'react'
import { DEFAULT_AVATAR } from '../../../content/images'
import { bottomHeaderTools, leftHeaderTools, rightHeaderTools } from '../../../content/profile/headerTools'
import { ProfileContext } from '../../../pages/profile/[id]'
import ProfileToolsPanel from '../../icon-tools-panel/ProfileToolsPanel'
import OnlineCircle from '../../Index/OnlineCircle'
import { getLastSeen } from '../utils/lastSeen'

const RIGHT_ICONS_START = 0

const ProfileHeader: React.FC = () => {
	const { avatar, firstName, lastName, lastSeen, online } = useContext(ProfileContext)

	let imgBoxSize
	if (process.browser) {
		imgBoxSize = Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight)
	}
	return (
		<>
			<Flex position="fixed" zIndex={20} top={0} left={0} right={0} p={3}>
				<ProfileToolsPanel justifyContent="left" flexGrow={1} gap={3} tools={leftHeaderTools} />
				<ProfileToolsPanel gap={3} tools={rightHeaderTools} />
			</Flex>
			<Box
				overflow="hidden"
				width="100%"
				position="relative"
				boxShadow="0px 0px 10px 0px rgba(26,20,26,1), 0px 0px 300px -100px rgba(232,220,232,1);">
				<Box height="50vh" width="100%" opacity={0.9} position="relative" zIndex="-1">
					<NextImage src={avatar || DEFAULT_AVATAR} layout="fill" objectFit="cover" alt="" priority={true} />
				</Box>
				<Flex
					position="absolute"
					left={0}
					bottom={0}
					right={0}
					p={3}
					alignItems="center"
					justifyContent="space-between">
					<Box backgroundColor="rgba(0,0,0,0.3)" rounded="md" px={3} py={1}>
						<Heading size="md">{`${firstName} ${lastName}`}</Heading>
						{online ? (
							<OnlineCircle title="Online" online={online} />
						) : lastSeen ? (
							<Text>Last seen {getLastSeen(lastSeen)}</Text>
						) : null}
					</Box>
					<ProfileToolsPanel pr={2} gap={4} tools={bottomHeaderTools} />
				</Flex>
			</Box>
		</>
	)
}

export default ProfileHeader
