import Head from 'next/head'
import { NormalizedCacheObject } from '@apollo/client'
import { initializeApollo } from 'src/graphql'
import { GET_PROFILS_QUERY } from '@app/graphql'
import { Home } from '@app/containers'
import { MAX_PROFILE_TO_SHOW } from '@app/config'

/**
 * Home page
 */
function HomePage(): JSX.Element {
	return (
		<>
			<Head>
				<title>Home - Profils</title>
			</Head>
			<Home />
		</>
	)
}

export async function getStaticProps(): Promise<NormalizedCacheObject> {
	const apolloClient = initializeApollo()

	await apolloClient.query({
		query: GET_PROFILS_QUERY,
		variables: {
			start: 0,
			limit: MAX_PROFILE_TO_SHOW,
		},
	})

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
		},
	}
}

export default HomePage
