import { IconType } from "react-icons"

export interface IconToolsItem {
	icon: IconType
  link? : string
  scale?: number
  offsetTop?: string // in pixels
}