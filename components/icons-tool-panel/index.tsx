import { WithKey } from '../../content/utils/withKey'
import { FlexCenter } from '../../ui'
import { IconToolsItem } from '../../content/types'
import { IconBaseProps } from 'react-icons'
import { FlexProps, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

type IconsToolPanelProps = {
	tools: WithKey<IconToolsItem>[]
	iconProps?: IconBaseProps
} & FlexProps

export const IconsToolPanel = ({ tools, iconProps, ...flexProps }: IconsToolPanelProps) => {
	return (
		<FlexCenter {...flexProps}>
			{tools.map((item) => {
				const Icon = item.icon
				const fontSize = (item?.scale || 1) * 2.2

				const ToolIcon = () => (
					<FlexCenter w="3rem" h="3rem" backgroundColor="rgba(0,0,0,0.3)" rounded="md">
						<Icon
							key={item.key}
							color="rgba(255,255,255,0.9)"
							fontSize={`${fontSize}rem`}
							{...iconProps}
						/>
					</FlexCenter>
				)

				if (item?.link) {
					return (
						<NextLink href={item.link}>
							<Link>
								<ToolIcon />
							</Link>
						</NextLink>
					)
				}

				return <ToolIcon />
			})}
		</FlexCenter>
	)
}
