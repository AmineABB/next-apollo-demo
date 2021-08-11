import casual from 'casual-browserify'
import { MAX_PROFILE_TO_FETCH } from '@app/config'

/**
 * Mock profils
 */
export const mocks = [...new Array(MAX_PROFILE_TO_FETCH)].map(() => ({
	id: casual.uuid,
	name: casual.first_name,
	address: casual.address1,
	email: casual.email,
	phone: casual.phone,
}))
