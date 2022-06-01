import { withKey, WithKey } from "../utils/withKey"

export interface Category {
  title: string
  count: number
}

export const CATEGORIES: WithKey<Category>[] = withKey([
  {
    title: 'Friends',
    count: 35
  },
  {
    title: 'Groups',
    count: 7
  },
  {
    title: 'Favorites',
    count: 1333
  },
  {
    title: 'Videos',
    count: 7
  }
])

