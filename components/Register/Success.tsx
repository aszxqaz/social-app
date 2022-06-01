import { Center, Flex, Heading, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Success = (): React.ReactElement => {
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
					<NextLink href="/login">
						<Link as="a" display="inline" textColor="green.300">
							login page
						</Link>
					</NextLink>
					.
				</Text>
			</Flex>
		</Center>
	)
}
