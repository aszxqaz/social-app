import { Flex, Box } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { headerToolsContent } from '../../content/index/headerTools'
import { IconToolsPanel } from '../icon-tools-panel'

interface HeaderToolsProps {
	children?: React.ReactNode
}

const HeaderTools: React.FC<HeaderToolsProps> = ({}) => {
	return (
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
			<IconToolsPanel ml="auto" pt={3} tools={headerToolsContent} gap={6} iconProps={{ opacity: 0.8 }} />
		</Flex>
	)
}

export default HeaderTools
