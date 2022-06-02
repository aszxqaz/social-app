import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<ColorModeScript initialColorMode="dark" />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
