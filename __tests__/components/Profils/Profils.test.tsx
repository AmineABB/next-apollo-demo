import { render } from '@testing-library/react'
import { Profils } from '@app/components'
import { staticMocks } from '@app/mocks'

describe('Profils', () => {
	it('should render one profile', () => {
		const { getAllByTestId } = render(<Profils items={[staticMocks[0]]} />)
		const profile = getAllByTestId('profile')
		expect(profile).toHaveLength(1)
	})

	it('should render multiple profiles', () => {
		const { getAllByTestId } = render(<Profils items={staticMocks} />)
		const profile = getAllByTestId('profile')
		expect(profile).toHaveLength(4)
	})
})
