import { SearchIcon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'

interface SearchProps {
	onChange: React.ChangeEventHandler<HTMLInputElement>
	value: string
}

const Search: React.FC<SearchProps> = ({ onChange, value }) => {
	return (
		<Box px={2} py={2}>
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					<SearchIcon color="gray.500" />
				</InputLeftElement>
				<Input onChange={onChange} value={value} background="#212734" placeholder="Search" />
			</InputGroup>
		</Box>
	)
}

export default Search

// border="none" rounded="none" outline="none" background="#212734"
