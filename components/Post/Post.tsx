import { Text, Box, Flex, Center, Image as ChakraI } from '@chakra-ui/react'
import React from 'react'
import { DEFAULT_AVATAR } from '../../content/images'
import Image from 'next/image'
import { RiEyeFill, RiMessageFill, RiMore2Fill, RiShareForwardFill, RiThumbUpFill } from 'react-icons/ri'
import { IconBaseProps, IconType } from 'react-icons'

interface PostProps {
	children?: React.ReactNode
}

type IconProps = {
	icon: IconType
} & IconBaseProps

const Icon: React.FC<IconProps> = ({ icon, ...rest }) => {
	const C = icon
	return <C fontSize="1.4rem" {...rest} />
}

const icons = [RiEyeFill, RiMessageFill, RiShareForwardFill, RiThumbUpFill]

const Post: React.FC<PostProps> = ({}) => {
	return (
		<Flex mx={3} mb={10} flexDirection="column" bgColor="#2b3446">
			<Flex p={3}>
				<Box width="50px" height="50px" rounded="xs" overflow="hidden" border="1px" borderColor="white">
					<Image src={DEFAULT_AVATAR} width="50px" height="50px" objectFit="cover" alt="" />
				</Box>
				<Box flexGrow={1} px={3}>
					<Box>Maxim Butenko</Box>
					<Box>23 July 2022 19-20</Box>
				</Box>
				<Box>
					<Icon icon={RiMore2Fill} />
				</Box>
			</Flex>
			<Box>
				<Text px={3}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est diam, vestibulum id tellus nec, gravida
					pretium justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
				<Flex borderBottom="1px solid rgba(255,255,255,0.1);" pt={3}>
					<Flex width="50%" height="140px" borderRight="1px solid rgba(255,255,255,0.1);">
						<Image
							style={{ display: 'block' }}
							src="/gallery/wallpaper-1.jpg"
							width={1280}
							height={1024}
							objectFit="cover"
							alt=""
						/>
					</Flex>
					<Flex width="50%" height="140px">
						<Image
							style={{ display: 'block' }}
							src="/gallery/wallpaper-2.jpg"
							width={246}
							height={205}
							objectFit="cover"
							alt=""
						/>
					</Flex>
				</Flex>
				<Flex pb={3}>
					<Flex width="50%" height="140px" borderRight="1px solid rgba(255,255,255,0.1);">
						<Image
							style={{ display: 'block' }}
							src="/gallery/wallpaper-3.jpg"
							width="251"
							height="201"
							objectFit="cover"
							alt=""
							onClick={function (e) {
								const img = e.currentTarget
								let scale = 1
                let initialWidth = img.width
                let initialHeight = img.height
								img.addEventListener('wheel', (e) => {
									e.preventDefault()
                  img.style.objectFit = "none"
                  img.style.maxWidth = "300%"
                  img.style.maxHeight = "300%"
									// console.log(`delta Y : `, e.deltaY)
									// console.log(`delta Z: `, e.deltaZ)
									// console.log(`clientX: `, e.clientX)
									// console.log(`clientY: `, e.clientY)
									// console.log(`offsetX: `, e.offsetX)
									// console.log(`offsetY: `, e.offsetY)
									// console.log(`movementX: `, e.movementX)
									// console.log(`movementY: `, e.movementY)
                  // @ts-ignore
									scale += e.deltaY * -0.01

									// Restrict scale
									scale = Math.min(Math.max(0.125, scale), 4)

									// Apply scale transform
									// img.style.transform = `scale(${scale})`
                  img.style.width = (initialWidth * scale).toString() + "px"
                  img.style.height = (initialHeight * scale).toString() + "px"
                  console.log(img.width)
                  console.log(img.height)
								})
								document.body.style.overflow = 'hidden'
								img.style.width = '100%'
								img.style.height = '100%'
								img.style.objectFit = 'contain'
								img.style.background = 'rgba(0,0,0,0.8)'
								img.style.position = 'fixed'
								img.style.zIndex = '99'
							}}
						/>
					</Flex>
					<Flex width="50%" height="140px">
						<Image
							style={{ display: 'block' }}
							src="/gallery/wallpaper-4.jpg"
							width="275"
							height="183"
							objectFit="cover"
							alt=""
						/>
					</Flex>
				</Flex>
				<Text px={3}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras est diam, vestibulum id tellus nec, gravida
					pretium justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</Text>
			</Box>
			<Flex gap={3} pr={3}>
				<Flex flexGrow={1}>
					<Center width="3rem" height="3rem">
						<Icon icon={RiEyeFill} />
					</Center>
					<Center>3</Center>
				</Flex>
				<Center>
					<Center width="3rem" height="3rem">
						<Icon icon={RiMessageFill} />
					</Center>
					<Center>3</Center>
				</Center>
				<Center>
					<Center width="3rem" height="3rem">
						<Icon icon={RiShareForwardFill} />
					</Center>
					<Center>3</Center>
				</Center>
				<Center opacity={0.7} _hover={{ opacity: 1 }}>
					<Center width="3rem" height="3rem">
						<Icon icon={RiThumbUpFill} />
					</Center>
					<Center>3</Center>
				</Center>
			</Flex>
		</Flex>
	)
}

export default Post
