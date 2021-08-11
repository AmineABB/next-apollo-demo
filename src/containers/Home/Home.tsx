import { useState, useCallback, useMemo, ChangeEvent } from 'react'
import { useQuery } from '@apollo/client'
import { Box, Flex, Spinner } from '@chakra-ui/react'
import { GET_PROFILS_QUERY } from '@app/graphql'
import { Profils, LoadMore, Search, NoResults } from '@app/components'
import { MAX_PROFILE_TO_SHOW, MAX_PROFILE_TO_FETCH, MIN_CHAR_TO_SEARCH } from '@app/config'

function Home(): JSX.Element {
	const [isFetching, setIsFetching] = useState(false)
	const [search, setSearch] = useState('')
	const { data, loading, error, fetchMore } = useQuery(GET_PROFILS_QUERY, {
		variables: {
			start: 0,
			limit: MAX_PROFILE_TO_SHOW,
		},
		onError: () => setIsFetching(false),
	})

	/**
	 * Handle fetch new profils
	 */
	const handleFetchMore = () => {
		const start: number = data.profils.length

		// Disable load more button
		setIsFetching(true)

		fetchMore({
			query: GET_PROFILS_QUERY,
			variables: {
				start,
				limit: MAX_PROFILE_TO_SHOW,
			},
			updateQuery: (previousResult, { fetchMoreResult }) => {
				if (!fetchMoreResult) {
					setIsFetching(false)
					return previousResult
				}
				setIsFetching(false)
				return {
					profils: [...previousResult.profils, ...fetchMoreResult.profils],
				}
			},
		})
	}

	/**
	 * Handle search field
	 */
	const handleSetSearch = useCallback(
		(evt: ChangeEvent<HTMLInputElement>) => setSearch(evt.target.value),
		[]
	)

	/**
	 * Memoed Profils results
	 */
	const memoedProfils = useMemo(() => {
		if (search.length < MIN_CHAR_TO_SEARCH) {
			return data?.profils
		}

		return data.profils.filter(({ name }: { name: string }) =>
			name.toLowerCase().startsWith(search.toLowerCase())
		)
	}, [data, search])

	if (loading) {
		return (
			<Flex w="full" h="100vh" justifyContent="center" alignItems="center">
				<Spinner size="lg" data-testid="loading" />
			</Flex>
		)
	}

	if (error) {
		return (
			<Flex w="full" h="100vh" justifyContent="center" alignItems="center">
				<NoResults message="An error has occurred. Please try again" />
			</Flex>
		)
	}

	const hasNoResults = memoedProfils.length === 0
	const shouldDisplayLoadMore = !hasNoResults && data?.profils.length < MAX_PROFILE_TO_FETCH

	return (
		<>
			<Box p={5}>
				<Search value={search} onSetSearch={handleSetSearch} />
				{hasNoResults && <NoResults />}
				<Profils items={memoedProfils} />
				{shouldDisplayLoadMore && <LoadMore onFetchMore={handleFetchMore} isLoading={isFetching} />}
			</Box>
		</>
	)
}

export default Home
