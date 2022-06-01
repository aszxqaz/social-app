import { ComponentWithAs, Flex, FlexProps } from '@chakra-ui/react'

export const FlexCenter: ComponentWithAs<'div', FlexProps> = ({ children, ...rest }) => {
	return (
		<Flex alignItems="center" justifyContent="center" {...rest}>
			{children}
		</Flex>
	)
}
