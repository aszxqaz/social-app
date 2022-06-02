import { IconType } from 'react-icons'
import {
	RiHome4Fill,
	RiRefreshLine,
	RiMore2Fill,
	RiMessage2Line,
	RiImage2Line,
} from 'react-icons/ri'
import { GrGallery } from './GalleryIcon'
import { WithKey, withKey } from '../../components/authentication/content/withKey'
import { IconToolsItem } from '../types'

type HeaderToolsItem = IconToolsItem

export const leftHeaderTools: WithKey<HeaderToolsItem>[] = withKey([
	{
		icon: RiHome4Fill,
		link: '/',
	},
])

export const rightHeaderTools: WithKey<HeaderToolsItem>[] = withKey([
	{
		icon: RiMore2Fill,
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
