import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { CATEGORIES } from '../../content/profile/categories'
import {
	bottomHeaderTools,
	leftHeaderTools,
	rightHeaderTools,
} from '../../content/profile/headerTools'
import { FlexCenter } from '../../ui'
import { IconsToolPanel } from '../icons-tool-panel'
import Categories from './Categories'
import { getLastSeen } from './utils/lastSeen'

export interface ProfileHeaderProps {
	image?: string
	username: string
	lastSeen: Date
}

const RIGHT_ICONS_START = 0

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ lastSeen, username, image }) => {
	let imgBoxSize
	if (process.browser) {
		imgBoxSize = Math.min(
			document.documentElement.clientWidth,
			document.documentElement.clientHeight,
		)
	}
	return (
		<>
			<Flex position="fixed" zIndex={20} top={0} left={0} right={0} p={3}>
				<IconsToolPanel
					justifyContent="left"
					flexGrow={1}
					gap={3}
					tools={leftHeaderTools}
				/>
				<IconsToolPanel gap={3} tools={rightHeaderTools} />
			</Flex>
			<Box overflow="hidden" width="100%" height={imgBoxSize} position="relative">
				<Image opacity={0.9} src="/me.jpeg" width="full" height="full" objectFit="cover" alt="" />
				<Flex
					position="absolute"
					left={0}
					bottom={0}
					right={0}
					p={3}
					alignItems="center"
					justifyContent="space-between">
					<Box backgroundColor="rgba(0,0,0,0.3)" rounded="md" px={3} py={1}>
						<Heading size="md">{username}</Heading>
						<Text>Last seen {getLastSeen(lastSeen)}</Text>
					</Box>
					<IconsToolPanel pr={2} gap={4} tools={bottomHeaderTools} />
				</Flex>
			</Box>

			<Categories categories={CATEGORIES} />
			{/* <p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend mattis tincidunt. Proin
				nec erat id eros placerat vestibulum auctor et nisi. Aliquam erat volutpat. Vestibulum
				sodales feugiat mi non euismod. Pellentesque gravida elit vel tellus convallis, sit amet
				egestas turpis vestibulum. Donec vehicula consectetur lorem, sed feugiat velit mollis a.
				Duis ante nisl, laoreet nec enim nec, pulvinar malesuada ipsum. Curabitur quis consectetur
				turpis. Fusce molestie dui vel dapibus vestibulum. Etiam blandit eleifend elementum. Nunc
				facilisis bibendum rhoncus. Quisque finibus, arcu at laoreet tincidunt, nisi purus ornare
				mauris, non laoreet lorem leo vitae dolor. Vestibulum lacinia leo et tellus tempus feugiat.
				Nulla eu mi facilisis, semper lorem quis, efficitur ligula. Curabitur sagittis tellus dolor,
				ut facilisis lacus rutrum at. Nam mattis elit sed ante mattis, vel sagittis libero sodales.
				Praesent ornare diam vitae sagittis volutpat. Aenean luctus quam vel tortor laoreet, non
				sollicitudin sapien convallis. Nullam euismod, tellus in luctus finibus, elit sem luctus
				tortor, at vestibulum sem tellus vitae urna. Sed pellentesque enim et lorem ultricies, vel
				sodales leo commodo. Quisque auctor elit eu felis vulputate scelerisque. Cras eget feugiat
				urna. Etiam et varius dui, sed condimentum lectus. Cras eros dolor, rutrum at lacinia
				rutrum, tristique sit amet arcu. Suspendisse erat odio, viverra at mi non, congue gravida
				dui. Donec eu justo sed metus rhoncus dictum quis quis orci. In hac habitasse platea
				dictumst. Integer accumsan massa elit, ut rhoncus ligula tristique egestas. Quisque
				tincidunt, dui in efficitur maximus, purus ligula mollis est, sed sollicitudin elit nibh
				aliquam nisl. Nam sit amet ligula vel sem lacinia ultrices eget a risus. Cras sit amet
				imperdiet ipsum, a semper felis. Mauris rutrum nunc a est efficitur auctor. Suspendisse vel
				orci enim. Nam vestibulum metus felis, tincidunt tristique turpis aliquam et. Nam suscipit
				ante ac felis ultricies, luctus blandit dolor aliquet. Suspendisse ultrices faucibus libero,
				sed varius metus venenatis nec. Sed non eleifend purus, nec luctus justo. Aenean magna
				lectus, laoreet nec tortor a, euismod tempor sem. Nulla facilisi. Pellentesque vel justo
				quam. Praesent a magna nec lacus pretium mattis. Fusce mauris tellus, ultricies eget turpis
				ac, faucibus dictum dolor. Ut et purus felis. Vivamus nec lacus eros. Pellentesque a dapibus
				enim, in dictum mauris. Donec turpis sem, molestie non elit ac, tempus malesuada nunc.
				Vestibulum tincidunt ligula quis mi vestibulum consectetur. Etiam consequat elementum lacus
				id condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
				ridiculus mus. Integer scelerisque justo non nisi faucibus egestas. In mi lectus, cursus
				consequat dapibus vitae, facilisis id orci. Fusce elementum, dui condimentum blandit
				ultricies, augue neque varius erat, ut malesuada enim diam quis erat. Quisque sapien ligula,
				malesuada eget aliquam eget, elementum eu arcu. Curabitur iaculis laoreet consequat.
				Suspendisse dignissim pretium purus. Ut auctor dignissim ante, id efficitur ex vulputate
				sed. Nullam in odio ultricies, gravida mi vel, posuere orci.
			</p> */}
		</>
	)
}

export default ProfileHeader
