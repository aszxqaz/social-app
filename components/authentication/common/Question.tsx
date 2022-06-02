import { Box, Link } from '@chakra-ui/react'
import React from 'react'
import { NextLink, Paragraph } from '../../../easy-imports'
import { TextContent } from '../content/textContent'

interface QuestionProps {
	textContent: TextContent
}

export const Question: React.FC<QuestionProps> = ({ textContent }) => (
	<Box mt={2}>
		<Paragraph textAlign="center">
			{textContent.question}&nbsp;
			<NextLink href={textContent.href}>
				<Link colorScheme="green">{textContent.link}</Link>
			</NextLink>
		</Paragraph>
	</Box>
)

