import { IconType } from 'react-icons'
import { RiUser3Line } from 'react-icons/ri'

interface ProfileMenuContentItem {
	title: string
	link: string
	Icon: IconType
}

export const profileMenuContent: ProfileMenuContentItem[] = [
	{
		title: 'Friends',
		Icon: RiUser3Line,
		link: '/friends',
	},
]
