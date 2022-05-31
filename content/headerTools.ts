import { IconType } from 'react-icons'
import { RiEditLine, RiMore2Fill, RiRefreshLine, RiSearchLine } from 'react-icons/ri'

interface HeaderToolsItem {
	icon: IconType
	key: number
}

export const headerToolsContent: HeaderToolsItem[] = [
	{
		icon: RiRefreshLine,
		key: Math.random()
	},
	{
		icon: RiSearchLine,
		key: Math.random()
	},

	{
		icon: RiEditLine,
		key: Math.random()
	},
	{
		icon: RiMore2Fill,
		key: Math.random()
	},
]
