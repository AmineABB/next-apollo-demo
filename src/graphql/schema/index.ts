import { makeExecutableSchema } from '@graphql-tools/schema'
import { typeDefs, resolvers } from '@app/graphql'

export const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
})
