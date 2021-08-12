import { render, waitFor } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { Home } from '@app/containers'
import { GET_PROFILS_QUERY } from '@app/graphql'
import { apolloProfilsMocks } from '@app/mocks'
import { MAX_PROFILE_TO_SHOW } from '@app/config'

const mocksWithResponse = [
	{
		request: {
			query: GET_PROFILS_QUERY,
			variables: {
				start: 0,
				limit: MAX_PROFILE_TO_SHOW,
			},
		},
		result: {
			data: {
				profils: apolloProfilsMocks,
			},
		},
	},
]

const mocksWithError = [
	{
		request: {
			query: GET_PROFILS_QUERY,
		},
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

	it('should render profils correctly', async () => {
		const { queryByTestId, queryAllByTestId } = render(
			<MockedProvider mocks={mocksWithResponse} addTypename={false}>
				<Home />
			</MockedProvider>
		)

		const loading = queryByTestId('loading')

		await waitFor(() => {
			expect(loading).not.toBeInTheDocument()
		})

		const profile = queryAllByTestId('profile')
		expect(profile).toHaveLength(9)
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
