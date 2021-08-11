import { gql } from '@apollo/client'

export const GET_PROFILS_QUERY = gql`
	query ProfilsQuery($start: Int, $limit: Int) {
		profils(start: $start, limit: $limit) {
			id
			name
			address
			email
			phone
		}
	}
`
