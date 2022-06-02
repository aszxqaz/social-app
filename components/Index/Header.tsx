import { Box, Flex, FlexProps, Heading, Link, LinkProps, TypographyProps } from '@chakra-ui/react'
import React from 'react'
import { RiPlayCircleLine } from 'react-icons/ri'
import { headerMenuContent } from '../../content/index/headerMenu'
import { headerToolsContent } from '../../content/index/headerTools'
import Image from 'next/image'
import { IconToolsPanel } from '../icon-tools-panel'

interface HeaderProps {
	children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<Flex
			flexDir="column"
			width="100%"
			bgGradient="linear(to-r, blue.700, blue.800)"
			boxShadow="lg"
			gap={3}>
			<Flex alignItems="center" pr={3}>
        <Box width="20%">
          <Image
						src="/logo/rocket.png"
						width={150}
						height={86}
						layout="responsive"
						objectFit="contain"
						alt="Rocket application logo"
					/>
        </Box>
				<Box flexGrow={1}>
					
				</Box>
				{/* <Flex gap={4}>
					{headerToolsContent.map((item) => {
						const Icon = item.icon
						return <Icon key={item.icon.name} fontSize="1.5rem" />
					})}
				</Flex> */}
        <IconToolsPanel tools={headerToolsContent} gap={6} iconProps={{opacity: 0.8}} />
			</Flex>
			<Flex>
				{headerMenuContent.map((item, i) => {
					const flexStyle: FlexProps = item.active
						? {
								borderBottom: '2px',
								borderColor: 'white',
						  }
						: {}
					const linkStyle: LinkProps = {
						textColor: item.active ? 'white' : 'whiteAlpha.500',
						textTransform: 'uppercase',
					}

					return (
						<Flex
							key={item.title}
							pb={3}
							onClick={() => {
								item.active = true
							}}
							flexGrow={1}
							width="100%"
							justify="center"
							{...flexStyle}
							cursor="pointer">
							<Link {...linkStyle}>{item.title}</Link>
						</Flex>
					)
				})}
			</Flex>
		</Flex>
	)
}

export default Header
