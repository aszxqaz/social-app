import { IconType } from 'react-icons'
import { RiEditLine, RiMore2Fill, RiRefreshLine, RiSearchLine } from 'react-icons/ri'

export type HEADER_MENU_ITEMS = 'Profile' | 'Feed' | 'Messages'

interface HeaderMenuItem {
	title: HEADER_MENU_ITEMS
	active?: boolean
	component: React.FC<{ active: boolean }>
}

export const headerMenuContent: HeaderMenuItem[] = [
	{
    active: true,
		title: 'Profile',
		component: () => <div>Profile Page</div>,
	},
	{
		title: 'Feed',
		component: () => <div>Profile Page</div>,
	},
	{
		title: 'Messages',
		component: () => <div>Profile Page</div>,
	},
]

// interface HeaderMenuConstructorOptions {
//   pages: HeaderMenuItem[]
//   defaultCurrentPage: keyof pages
// }

// class HeaderMenu {
//   public currentPage: HEADER_MENU_ITEMS

//   constructor({ }) {
//     this.currentPage = 'Profile'
//   }
// }
