import { render } from '@testing-library/react'
import { Profile } from '@app/components'
import { staticMocks } from '@app/mocks'

describe('Profile', () => {
	it('should render the component with the correct data', () => {
		const { getByText } = render(<Profile item={staticMocks[0]} />)
		const { name, email, phone, address } = staticMocks[0]
		const expectedName = getByText(name)
		const expectedEmail = getByText(email)
		const expectedPhone = getByText(phone)
		const expectedAddress = getByText(address)

		expect(expectedName).toBeInTheDocument()
		expect(expectedEmail).toBeInTheDocument()
		expect(expectedPhone).toBeInTheDocument()
		expect(expectedAddress).toBeInTheDocument()
	})
})
