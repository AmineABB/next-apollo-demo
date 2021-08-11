import { Flex, Text } from '@chakra-ui/react'

/**
 * Single profile info
 */
function ProfileInfo({ name, value }: { name: string; value: string }): JSX.Element {
	return (
		<Flex>
			<Text
				as="span"
				fontSize="sm"
				textTransform="capitalize"
				width="70px"
				color="blue.600"
				fontWeight="semibold"
			>
				{name} :
			</Text>
			<Text as="span" fontSize="sm" color="gray.500">
				{value}
			</Text>
		</Flex>
	)
}

export default ProfileInfo
