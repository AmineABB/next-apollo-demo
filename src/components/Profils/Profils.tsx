import { memo } from 'react'
import { Flex } from '@chakra-ui/react'
import { Profile } from '@app/components'
import { ProfileType } from '@app/types'

/**
 * Profils item
 */
function Profils({ items }: { items: ProfileType[] }): JSX.Element {
	return (
		<Flex flexWrap="wrap" alignItems="stretch" justifyContent="center">
			{items.map((profile) => (
				<Profile key={profile.id} item={profile} />
			))}
		</Flex>
	)
}

export default memo(Profils)
