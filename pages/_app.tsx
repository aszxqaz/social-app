import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import theme from '../chakra/theme'
import { store } from '../redux/store'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<SessionProvider session={session}>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</SessionProvider>
		</ChakraProvider>
	)
}

export default MyApp
