import { Input, Text, Flex } from '@chakra-ui/react'
import { SearchProp } from '@app/types'

/**
 * Search
 */
function Search({ value, onSetSearch }: SearchProp): JSX.Element {
	return (
		<Flex
			alignContent="center"
			alignItems="center"
			flexDirection={['column', 'row']}
			maxW="500px"
			m="2rem auto"
		>
			<Text fontSize="md" fontWeight="semibold" color="orange.400" flex="24% 0 0" mb={{ base: 2 }}>
				Search profile
			</Text>
			<Input
				p={5}
				rounded="2xl"
				shadow="inner"
				value={value}
				onChange={onSetSearch}
				placeholder="Example : Lynda"
				size="sm"
			/>
		</Flex>
	)
}

export default Search
