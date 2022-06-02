import { ChakraTheme, extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { Text } from './componentStyleConfig'

const breakpoints = createBreakpoints({
	sm: '40em',
	md: '52em',
	lg: '64em',
	xl: '80em',
})

const theme = {
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: false,
	},
	styles: {
		global: {
			// '*': {
			// 	fontFamily: 'Nunito',
			// 	fontSize: '1.2rem',
			// },
      // form: {
      //   fontFamily: 'Nunito',
			// 	fontSize: '1.2rem',
      // }
		},
	},
	semanticTokens: {
		colors: {
			text: {
				default: '#16161D',
				_dark: '#ade3b8',
			},
			heroGradientStart: {
				default: '#7928CA',
				_dark: '#e3a7f9',
			},
			heroGradientEnd: {
				default: '#FF0080',
				_dark: '#fbec8f',
			},
		},
		radii: {
			button: '12px',
		},
	},
	colors: {
		black: '#16161D',
	},
	fonts: { sansSerif: `'Nunito', sans-serif` },
	breakpoints,
}

export default extendTheme(theme)
