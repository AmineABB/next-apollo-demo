import { useMemo } from 'react'
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { IS_SERVER, GRAPHQL_PATH } from '@app/config'
import { ApolloClientType } from '@app/types'

let apolloClient: ApolloClientType

function createIsomorphLink() {
	if (IS_SERVER) {
		// server
		const { SchemaLink } = require('@apollo/client/link/schema')
		const { schema } = require('src/graphql')
		return new SchemaLink({ schema })
	}
	// client
	const { HttpLink } = require('@apollo/client/link/http')
	return new HttpLink({
		uri: GRAPHQL_PATH,
		credentials: 'same-origin',
	})
}

function createApolloClient() {
	return new ApolloClient({
		ssrMode: IS_SERVER,
		link: createIsomorphLink(),
		cache: new InMemoryCache(),
	})
}

export function initializeApollo(initialState?: NormalizedCacheObject): ApolloClientType {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const _apolloClient = apolloClient ?? createApolloClient()

	// If your page has Next.js data fetching methods that use Apollo Client, the initial state
	// gets hydrated here
	if (initialState) {
		_apolloClient.cache.restore(initialState)
	}
	// For SSG and SSR always create a new Apollo Client
	if (IS_SERVER) {
		return _apolloClient
	}
	// Create the Apollo Client once in the client
	if (!apolloClient) {
		apolloClient = _apolloClient
	}

	return _apolloClient
}

export function useApollo(initialState: NormalizedCacheObject): ApolloClientType {
	const store = useMemo(() => initializeApollo(initialState), [initialState])
	return store
}
