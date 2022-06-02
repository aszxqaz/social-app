import { FlexProps } from '@chakra-ui/react'
import React from 'react'
import { IconBaseProps } from 'react-icons'
import { IconToolsPanel, IconToolsPanelProps } from '.'
import { IconToolsItem } from '../../content/types'
import { WithKey } from '../authentication/content/withKey'

interface ProfileToolsPanelProps extends IconToolsPanelProps {}

const toolBtnStyle: FlexProps = {
	bgColor: 'rgba(0,0,0,0.3)',
	rounded: 'md',
}

const iconStyle: IconBaseProps = {
	color: 'rgba(255,255,255,0.9)',
}

const ProfileToolsPanel: React.FC<ProfileToolsPanelProps> = ({ tools, toolBtnProps, iconProps, ...flexProps }) => {
	const toolMergedProps = { ...toolBtnStyle, ...toolBtnProps }
	const iconMergedProps = { ...iconProps, ...iconStyle }
	return <IconToolsPanel tools={tools} toolBtnProps={toolMergedProps} iconProps={iconMergedProps} {...flexProps} />
}

export default ProfileToolsPanel
