import { Center, Flex, Link, LinkProps } from '@chakra-ui/react'
import { MouseEventHandler } from 'react'
import { HeaderMenuOptions } from '../../content/index/headerMenu'
import HeaderTools from './HeaderTools'

type HeaderProps<T extends string> = {
	headerMenu: HeaderMenuOptions<T>
}

function HeaderFactory<T extends string>(): React.FC<HeaderProps<T>> {
	return function Header({ headerMenu }) {
		const getFlexStyle = (isActive: boolean) =>
			isActive
				? {
						borderBottom: '2px',
						borderColor: 'white',
				  }
				: {}

		const getLinkStyle = (isActive: boolean): LinkProps => ({
			textColor: isActive ? 'white' : 'whiteAlpha.500',
			textTransform: 'uppercase',
		})
		return (
			<Flex flexDir="column" width="100%" bgGradient="linear(to-r, blue.700, blue.800)" boxShadow="lg" gap={1}>
				<HeaderTools />
				<Flex overflowX="scroll" justifyContent="space-between">
					{
						Object.keys(headerMenu).map((key: string) => {
							if (typeof headerMenu[key as T] !== 'object') return null
							return (
								<Link
									{...getLinkStyle(headerMenu['currentActive'] === key)}
									onClick={(e) => {
										headerMenu['currentActive'] = key as T
										headerMenu[key as T].onClick?.(e)
									}}
									key={key}
									p={3}
									whiteSpace="nowrap"
									fontWeight="medium">
									<Center>{key}</Center>
								</Link>
							)
						})
						/*headerMenuItems.map((item, i) => {
						const flexStyle: FlexProps = item.active
							? {
									borderBottom: '2px',
									borderColor: 'white',
							  }
							: {}
						const linkStyle: LinkProps = {
							textColor: item.active ? 'white' : 'whiteAlpha.500',
							textTransform: 'uppercase',
						}
						{
							/* <Flex
								key={item.title}
								pb={3}
								onClick={() => {
									item.active = true
								}}
								flexGrow={1}
                px={5}
								width="100%"
								justify="center"
								{...flexStyle}
								cursor="pointer"> */
					}
				</Flex>
			</Flex>
		)
	}
}

export default HeaderFactory
