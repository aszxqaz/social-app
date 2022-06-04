import { Center, Flex, Heading, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { LOGIN_ROUTE } from '../../../routes'

const Success: React.FC = () => {
	return (
		<Center>
			<Flex
				mt={20}
				w="30rem"
				p="2rem"
				alignItems="center"
				flexDirection="column"
				rounded="md"
				shadow="md"
				borderColor="green.500"
				bgColor="green.900">
				<Heading size="xl">Congratulations!</Heading>
				<Text size="xl" p={6}>
					You have successfully signed up! Go to{' '}
					<NextLink href={LOGIN_ROUTE}>
						<Link as="a" display="inline" colorScheme="green">
							login page
						</Link>
					</NextLink>
					.
				</Text>
			</Flex>
		</Center>
	)
}

export default Success
