import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import { DarkModeSwitch } from '../chakra/DarkModeSwitch'

export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head />
				<body>
					<ColorModeScript initialColorMode='dark' />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
