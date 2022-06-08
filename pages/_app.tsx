import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import theme from '../chakra/theme'
import { store } from '../redux/store'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
			</Head>
			<ChakraProvider resetCSS theme={theme}>
				<SessionProvider session={session}>
					<Provider store={store}>
						<Component {...pageProps} />
					</Provider>
				</SessionProvider>
			</ChakraProvider>
		</>
	)
}

export default MyApp
