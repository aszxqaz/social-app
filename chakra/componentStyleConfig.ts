import { ComponentStyleConfig } from '@chakra-ui/react'

export const Button: ComponentStyleConfig = {
	defaultProps: {
		colorScheme: 'teal',
	},
}

export const Link: ComponentStyleConfig = {
	baseStyle: {
		textDecoration: 'none',
		_hover: {
			textDecoration: 'none',
		},
		_active: {
			textDecoration: 'none',
		},
		_visited: { textDecoration: 'none', textDecorationStyle: 'none', textDecorationLine: 'none' },
	},
	defaultProps: {},
}
