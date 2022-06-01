import { IconType } from 'react-icons'
import { RiEditLine, RiMore2Fill, RiRefreshLine, RiSearchLine } from 'react-icons/ri'
import { WithKey, withKey } from '../utils/withKey'

interface HeaderToolsItem {
	icon: IconType
}

export const headerToolsContent: WithKey<HeaderToolsItem>[] = withKey([
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
])