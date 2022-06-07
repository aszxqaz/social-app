import { IconType } from 'react-icons'
import { RiEditLine, RiMore2Fill, RiRefreshLine, RiSearchLine, RiTeamLine } from 'react-icons/ri'
import { WithKey, withKey } from '../../components/authentication/content/withKey'
import { IconToolsItem } from '../types'

interface HeaderToolsItem extends IconToolsItem {}

export const headerToolsContent: WithKey<IconToolsItem>[] = withKey<IconToolsItem>([
	{
		icon: RiTeamLine,
		link: {
			href: '/users',
		},
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
