import { WithKey } from '../authentication/content/withKey'
import { FlexCenter } from '../../ui'
import { IconToolsItem } from '../../content/types'
import { IconBaseProps } from 'react-icons'
import { FlexProps, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export type IconToolsPanelProps = {
	tools: WithKey<IconToolsItem>[]
	iconProps?: IconBaseProps
	toolBtnProps?: FlexProps
} & FlexProps

export const IconToolsPanel = ({ tools, iconProps, toolBtnProps, ...flexProps }: IconToolsPanelProps) => {
  console.log(tools)
	return (
		<FlexCenter {...flexProps}>
			{tools.map((item) => {
				const Icon = item.icon
				const fontSize = (item?.scale || 1) * 2.2

				const ToolIcon = () => (
					<FlexCenter w="3rem" h="3rem" cursor="pointer" {...toolBtnProps}>
						<Icon key={item.key} fontSize={`${fontSize}rem`} {...iconProps} />
					</FlexCenter>
				)

				if (item?.link) {
          console.log(item.link)
					return (
						<NextLink {...item.link} key={item.key}>
							<Link userSelect="none">
								<ToolIcon />
							</Link>
						</NextLink>
					)
				}

				return <ToolIcon key={item.key} />
			})}
		</FlexCenter>
	)
}
