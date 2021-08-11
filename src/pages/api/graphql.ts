import { ApolloServer } from 'apollo-server-micro'
import { GRAPHQL_PATH } from '@app/config'
import { schema } from '@app/graphql'
import { Config } from '@app/types'

const apolloServer = new ApolloServer({ schema })

export const config: Config = {
	api: {
		bodyParser: false,
	},
}

export default apolloServer.createHandler({ path: GRAPHQL_PATH })
