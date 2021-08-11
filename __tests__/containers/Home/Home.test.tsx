import { render, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { Home } from '@app/containers'
import { GET_PROFILS_QUERY } from '@app/graphql'
import { apolloProfilsMocks } from '@app/mocks'

const mocksWithResponse = [
	{
		request: { query: GET_PROFILS_QUERY },
		result: {
			data: {
				profils: apolloProfilsMocks,
			},
		},
	},
]

const mocksWithError = [
	{
		request: { query: GET_PROFILS_QUERY },
		error: new Error('Request failed'),
	},
]

describe('Home', () => {
	it('should render correctly with loading', () => {
		const { getByTestId } = render(
			<MockedProvider mocks={mocksWithResponse} addTypename={false}>
				<Home />
			</MockedProvider>
		)
		expect(getByTestId('loading')).toBeInTheDocument()
	})

	it('should render error message', async () => {
		const { queryByTestId, getByText } = render(
			<MockedProvider mocks={mocksWithError} addTypename={false}>
				<Home />
			</MockedProvider>
		)

		const loading = queryByTestId('loading')

		await waitFor(() => {
			expect(loading).not.toBeInTheDocument()
		})

		expect(getByText('An error has occurred. Please try again')).toBeInTheDocument()
	})
})
