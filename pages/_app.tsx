import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import defaultTheme from '../theme'

const theme = extendTheme({
	styles: {
		global: {
			body: { bgColor: "#1C1C1F",
        bgImage: "linear-gradient(344deg, #1C1C1F 0%, #272626 50%, #272626 100%)",
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
        
				// bgImage: 'linear-gradient(to bottom, #6fafaf 0%, #e2ebf0 100%)',
        // bg: '#e2ebf0'
        
        //'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)'
				// bgImage: 'linear-gradient(333deg, #1a322c 0%, #1a202c 100%)',
			},

		},
	},
})

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</ChakraProvider>
	)
}

export default MyApp
