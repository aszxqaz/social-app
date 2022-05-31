import { IconType } from 'react-icons'
import { RiEditLine, RiMore2Fill, RiRefreshLine, RiSearchLine } from 'react-icons/ri'

interface HeaderToolsItem {
	icon: IconType
}

export const headerToolsContent: HeaderToolsItem[] = [
	{
		icon: RiRefreshLine,
	},
	{
		icon: RiSearchLine,
	},
	{
		icon: RiEditLine,
	},
	{
		icon: RiMore2Fill,
	},
]
