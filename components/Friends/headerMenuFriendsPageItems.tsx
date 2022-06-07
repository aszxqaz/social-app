import { HeaderMenuOptions } from '../../content/index/headerMenu'

export type HEADER_MENU_FRIENDS_PAGE_ITEMS = 'Friends' | 'Online' | 'Incoming requests' | 'Outcoming requests'

export const headerMenu_FriendsPage: HeaderMenuOptions<HEADER_MENU_FRIENDS_PAGE_ITEMS> = {
	currentActive: 'Friends',
	Friends: {},
	Online: {},
	'Incoming requests': {},
	'Outcoming requests': {},
}
