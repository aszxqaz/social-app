import { Center, Circle } from '@chakra-ui/react'
import React from 'react'

interface OnlineCircleProps {
	online: boolean
	title?: React.ReactNode
}

const OnlineCircle: React.FC<OnlineCircleProps> = ({ online, title }) => {
	const circleStyle = online
		? {
				bg: 'linear-gradient(135deg, rgba(30,170,30,0.8) 0%, rgba(30,200,12,0.8) 100%);',
				boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75);',
		  }
		: {
				bg: 'linear-gradient(135deg, rgba(90,90,90,0.8) 0%, rgba(60,60,60,0.8) 100%);',
				boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75);',
		  }
	return (
		<Center>
			{title ? <div>{title}</div> : null}
			<Circle ml={1} size="0.75rem" shadow="md" {...circleStyle} />
		</Center>
	)
}

export default OnlineCircle
