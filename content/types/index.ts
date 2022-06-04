import { IconType } from "react-icons"

export interface IconToolsItem {
	icon: IconType
  link? : {
    href: string,
    as?: string,
    shallow?: boolean
  },
  scale?: number
  offsetTop?: string // in pixels
}