import { render } from '@testing-library/react'
import { NoResults } from '@app/components'

describe('NoResults', () => {
	it('should render the component correctly', () => {
		const { getByText } = render(<NoResults />)
		const text = getByText('Ops, no results found, please try again')
		expect(text).toBeInTheDocument()
	})

	it('should render the component with custom message', () => {
		const { getByText } = render(<NoResults message="This is custom message" />)
		const text = getByText('This is custom message')
		expect(text).toBeInTheDocument()
	})
})
