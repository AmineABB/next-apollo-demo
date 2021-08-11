import { render, fireEvent } from '@testing-library/react'
import { Search } from '@app/components'
import { SearchProp } from '@app/types'

describe('Search', () => {
	it('should render the component correctly', () => {
		const props: SearchProp = {
			value: '',
			onSetSearch: jest.fn(() => null),
		}
		const { getByText, getByPlaceholderText } = render(<Search {...props} />)
		const label = getByText('Search profile')
		const input = getByPlaceholderText('Example : Lynda')
		expect(label).toBeInTheDocument()
		expect(input).toBeInTheDocument()
	})

	it('should call onChange and set the new value', () => {
		const props: SearchProp = {
			value: undefined,
			onSetSearch: jest.fn(),
		}
		const { getByPlaceholderText } = render(<Search {...props} />)
		const input = getByPlaceholderText('Example : Lynda') as HTMLInputElement

		expect(input.value as string).toBe('')

		fireEvent.change(input, { target: { value: `Alex` } })

		expect(props.onSetSearch).toHaveBeenCalledTimes(1)
		expect(input.value).toBe('Alex')
	})
})
