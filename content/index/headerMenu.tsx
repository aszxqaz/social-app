import React from 'react'

export type HEADER_MENU_INDEX_PAGE_ITEMS = 'Home' | 'Feed' | 'Messages'

export type HeaderMenuOptions<T extends string> = {
	currentActive: T
} & {
	[key in T]: {
		component?: React.FC<{ active: boolean }>
		onClick?: (...args: any[]) => any
	}
}

export const headerMenu_IndexPage: HeaderMenuOptions<HEADER_MENU_INDEX_PAGE_ITEMS> = {
	currentActive: 'Home',
	Home: {},
	Feed: {},
	Messages: {},
}
