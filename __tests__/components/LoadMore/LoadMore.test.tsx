import { render, fireEvent } from '@testing-library/react'

import { LoadMore } from '@app/components'
import { LoadMoreProps } from '@app/types'

describe('LoadMore', () => {
	it('should render the component correctly', () => {
		const props: LoadMoreProps = {
			isLoading: false,
			onFetchMore: jest.fn(() => null),
		}
		const { getByText } = render(<LoadMore {...props} />)
		const button = getByText('Load more')
		expect(button).toBeInTheDocument()
	})

	it('should set the disabled attribute when loading', () => {
		const props: LoadMoreProps = {
			isLoading: true,
			onFetchMore: jest.fn(() => null),
		}
		const { container } = render(<LoadMore {...props} />)
		const button = container.querySelector('button')
		expect(button).toBeDisabled()
	})

	it('should call onClick callback', () => {
		const props: LoadMoreProps = {
			isLoading: false,
			onFetchMore: jest.fn(() => 'callback called'),
		}
		const { getByText } = render(<LoadMore {...props} />)
		const button = getByText('Load more')

		fireEvent.click(button)
		expect(props.onFetchMore).toBeCalledTimes(1)
		expect(props.onFetchMore).toHaveReturnedWith('callback called')
	})
})
