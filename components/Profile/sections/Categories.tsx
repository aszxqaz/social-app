import { Grid } from '@chakra-ui/react'
import React from 'react'
import { Category } from '../../../content/profile/categories'
import { WithKey } from '../../authentication/content/withKey'
import { TILE_COLORS } from '../../../ui/tileColors'
import TileCategory from './TileCategory'

interface CategoriesProps {
	categories: WithKey<Category>[]
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
	const tileColors = [...TILE_COLORS]
	return (
		<Grid gridTemplateColumns="1fr 1fr" gap={2} p={3}>
			{categories.map((category, i) => {
				const { key, ...rest } = category

				return <TileCategory key={key} {...rest} />
			})}
		</Grid>
	)
}

export default Categories
