import { Text } from '@chakra-ui/react'

/**
 * No results
 */
function NoResults({ message }: { message?: string }): JSX.Element {
	return (
		<Text fontSize="lg" color="gray.700" textAlign="center" p={10}>
			{message}
		</Text>
	)
}

NoResults.defaultProps = {
	message: 'Ops, no results found, please try again',
}

export default NoResults
