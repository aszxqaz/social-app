import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import theme from '../chakra/theme'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</ChakraProvider>
	)
}

export default MyApp
