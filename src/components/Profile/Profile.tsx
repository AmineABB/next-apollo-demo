import { useColorModeValue, Box } from '@chakra-ui/react'
import { ProfileType } from '@app/types'
import { ProfileInfo } from '@app/components'

/**
 * Profile
 */
function Profile({ item }: { item: ProfileType }): JSX.Element {
	return (
		<Box
			data-testid="profile"
			maxW="320px"
			mx={1}
			px={5}
			py={5}
			mb={10}
			rounded="lg"
			shadow="xl"
			bg={useColorModeValue('white', 'gray.800')}
			borderWidth="1px"
			flexBasis={['100%', '45%']}
		>
			<ProfileInfo name="name" value={item.name} />
			<ProfileInfo name="phone" value={item.phone} />
			<ProfileInfo name="email" value={item.email} />
			<ProfileInfo name="address" value={item.address} />
		</Box>
	)
}

export default Profile
