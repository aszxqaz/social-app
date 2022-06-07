import { RiHeart3Fill, RiUser3Fill } from 'react-icons/ri'
import { MainMenuItem } from '../types'

export const mainMenuContent: MainMenuItem[] = [
	{
		title: 'Friends',
		icon: RiUser3Fill,
		link: {
			href: '/friends',
		},
	},
	{
		title: 'Favourites',
		icon: RiHeart3Fill,
		link: {
			href: '/favourites',
		},
	},
]
