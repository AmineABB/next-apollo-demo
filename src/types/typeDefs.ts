import { gql } from '@apollo/client'

export const typeDefs = gql`
	type Profile {
		id: String!
		name: String!
		address: String!
		email: String!
		phone: String!
	}
	type Query {
		profils(start: Int, limit: Int): [Profile]
	}
`
