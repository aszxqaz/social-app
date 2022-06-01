import { WithKey } from '../../content/utils/withKey'
import { FlexCenter } from '../../ui'
import { IconToolsItem } from '../../content/types'
import { IconBaseProps } from 'react-icons'
import { FlexProps } from '@chakra-ui/react'

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

				return (
					<FlexCenter key={item.key} w="3rem" h="3rem" backgroundColor="rgba(0,0,0,0.3)" rounded="md" >
						<Icon color="rgba(255,255,255,0.7)" fontSize={`${fontSize}rem`} {...iconProps} />
					</FlexCenter>
				)
			})}
		</FlexCenter>
	)
}

