import { IconType } from 'react-icons'

export interface IconToolsItem {
	icon: IconType
	title?: string
	link?: {
		href: string
		as?: string
		shallow?: boolean
	}
	scale?: number
	offsetTop?: string // in pixels
	handleClick?: (...args: any[]) => any
}

export interface MainMenuItem {
	icon: IconType
	title: string
	link: {
		href: string
		as?: string
		shallow?: boolean
	}
}
