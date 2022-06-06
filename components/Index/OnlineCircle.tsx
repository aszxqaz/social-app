import { Center, Circle } from '@chakra-ui/react'
import React from 'react'

interface OnlineCircleProps {
	online: boolean
	title?: React.ReactNode
}

const OnlineCircle: React.FC<OnlineCircleProps> = ({ online, title }) => {
	const circleStyle = online
		? {
				bg: 'linear-gradient(135deg, rgba(164,179,87,1) 0%, rgba(117,137,12,1) 100%);',
				boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75);',
		  }
		: {
				bg: 'linear-gradient(135deg, rgba(99,95,88,1) 0%, rgba(64,64,64,1) 100%);',
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
