import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import NextImage from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { DEFAULT_AVATAR } from '../../../content/images'
import { bottomHeaderTools, leftHeaderTools, rightHeaderTools } from '../../../content/profile/headerTools'
import { ProfileContext } from '../../../pages/profile/[id]'
import ProfileToolsPanel from '../../icon-tools-panel/ProfileToolsPanel'
import OnlineCircle from '../../Index/OnlineCircle'
import { getLastSeen } from '../utils/lastSeen'

const RIGHT_ICONS_START = 0

const ProfileHeader: React.FC = () => {
	const { avatar, firstName, lastName, lastSeen, online } = useContext(ProfileContext)

	let imgBoxSize: number | '50vh' = '50vh'
	if (process.browser) {
		imgBoxSize = Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight)
	}
	const avatarOpacity = useRef<number>(1)
	const [op, setOp] = useState<number>(1)

	useEffect(() => {
		let scrollListener: any
		let scrollProgress = 0
		if (process.browser && typeof imgBoxSize === 'number') {
			scrollListener = () => {
				let newOpacity = (((imgBoxSize as number) - global.scrollY + 150) / (imgBoxSize as number)) ** 5
				newOpacity = newOpacity < 0 ? 0 : newOpacity > 1 ? 1 : newOpacity
				const wrapper = document.getElementById('dissapearing-wrapper')
				wrapper?.setAttribute('style', `opacity: ${newOpacity};`)
			}
			window.addEventListener('scroll', scrollListener)
		}
		return () => {
			scrollListener ? window.removeEventListener('scroll', scrollListener) : null
		}
	}, [imgBoxSize])
	return (
		<>
			<Flex position="fixed" zIndex={20} top={0} left={0} right={0} p={3}>
				<ProfileToolsPanel justifyContent="left" flexGrow={1} gap={3} tools={leftHeaderTools} />
				<ProfileToolsPanel gap={3} tools={rightHeaderTools} />
			</Flex>
			<Box
				id="dissapearing-wrapper"
				overflow="hidden"
				width="100%"
				transition="opacity"
				transitionDuration="0.1s"
				transitionTimingFunction="ease-out"
				position="relative"
				boxShadow="0px 0px 10px 0px rgba(26,20,26,1), 0px 0px 300px -100px rgba(232,220,232,1);">
				<Box height={imgBoxSize} width="100%" position="relative" zIndex="-1">
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
