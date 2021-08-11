import { ApolloClient, NormalizedCacheObject } from '@apollo/client'

export type ApolloClientType = ApolloClient<NormalizedCacheObject>

export type Config = {
	api: {
		externalResolver?: boolean
		bodyParser?:
			| boolean
			| {
					sizeLimit: string
			  }
	}
}
