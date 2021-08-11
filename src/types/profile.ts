import { ChangeEvent } from 'react'

export type ProfileType = {
	id: string
	name: string
	email: string
	phone: string
	address: string
}

export type ProfileResolverArgsType = {
	start: number
	limit: number
}

export type SearchProp = {
	value?: string
	onSetSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

export type LoadMoreProps = {
	onFetchMore: () => void
	isLoading: boolean
}
