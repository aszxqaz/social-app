import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'

export function Chakra({ cookies, children }: any) {
	// b) Pass `colorModeManager` prop
	const colorModeManager =
		typeof cookies === 'string' ? cookieStorageManagerSSR(cookies) : localStorageManager

	return <ChakraProvider colorModeManager={colorModeManager}>{children}</ChakraProvider>
}

// also export a reusable function getServerSideProps
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	return {
		props: {
			// first time users will not have any cookies and you may not return
			// undefined here, hence ?? is necessary
			cookies: req.headers.cookie ?? '',
		},
	}
}
