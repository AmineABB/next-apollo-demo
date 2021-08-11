import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { useApollo } from '@app/graphql'
import { theme } from '@app/theme'

/**
 * Custom app
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
	const apolloClient = useApollo(pageProps.initialApolloState)
	return (
		<ApolloProvider client={apolloClient}>
			<ChakraProvider resetCSS theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</ApolloProvider>
	)
}
