import { Grid } from '@chakra-ui/react'
import React from 'react'
import { Category } from '../../content/profile/categories'
import { WithKey } from '../../content/utils/withKey'
import { TILE_COLORS } from '../../ui/tileColors'
import TileCategory from './TileCategory'

interface CategoriesProps {
	categories: WithKey<Category>[]
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  const tileColors = [...TILE_COLORS]
	return (
		<Grid gridTemplateColumns="auto auto" gap={4} p={3}>
			{categories.map((category, i) => {
        // const bg = {
        //   bgColor: tileColors.splice(Math.round(Math.random() * (tileColors.length - 1)), 1)[0]
        // }
				return <TileCategory {...category} />
			})}
		</Grid>
	)
}

export default Categories
