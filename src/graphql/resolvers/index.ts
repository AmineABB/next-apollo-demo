import { mocks } from '@app/mocks'
import { ProfileResolverArgsType, ProfileType } from '@app/types'
import { MAX_PROFILE_TO_SHOW } from '@app/config'

export const resolvers = {
	Query: {
		profils: (
			parent: null,
			{ start = 0, limit = MAX_PROFILE_TO_SHOW }: ProfileResolverArgsType
		): ProfileType[] => mocks.slice(start, start + limit),
	},
}
