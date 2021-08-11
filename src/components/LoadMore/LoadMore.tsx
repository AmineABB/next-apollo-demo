import { Button, Flex } from '@chakra-ui/react'
import { LoadMoreProps } from '@app/types'

/**
 * Load more profile
 */
function LoadMore({ onFetchMore, isLoading }: LoadMoreProps): JSX.Element {
	return (
		<Flex p={10} justifyContent="center">
			<Button
				isLoading={isLoading}
				colorScheme="blue"
				variant="outline"
				width="10rem"
				onClick={onFetchMore}
			>
				Load more
			</Button>
		</Flex>
	)
}

export default LoadMore
