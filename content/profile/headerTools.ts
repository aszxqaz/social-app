import { IconType } from 'react-icons'
import { RiHome4Fill, RiRefreshLine, RiMore2Fill, RiMessage2Line, RiImage2Line, RiLogoutBoxRLine } from 'react-icons/ri'
import { GrGallery } from './GalleryIcon'
import { WithKey, withKey } from '../../components/authentication/content/withKey'
import { IconToolsItem } from '../types'
import { signOut } from 'next-auth/react'

type HeaderToolsItem = IconToolsItem

export const leftHeaderTools: WithKey<HeaderToolsItem>[] = withKey<IconToolsItem>([
	{
		icon: RiHome4Fill,
		link: {
			href: '/',
		},
	},
])

export const rightHeaderTools: WithKey<HeaderToolsItem>[] = withKey<IconToolsItem>([
	{
		icon: RiMore2Fill,
	},
	{
		icon: RiLogoutBoxRLine,
		handleClick: () => signOut(),
	},
])

export const bottomHeaderTools: WithKey<HeaderToolsItem>[] = withKey([
	{
		icon: RiMessage2Line,
	},
	{
		icon: RiImage2Line,
	},
])
