import { Dropdown } from 'semantic-ui-react'
import { debounce } from 'lodash'
import { nanoid } from '@reduxjs/toolkit'
import { useGetSearchMutation } from '../services/swapApi'
import { setFilm } from '../features/film'
const FilmSearch = () => {
	const [searchUniverse, { isLoading, data }] = useGetSearchMutation()
	const handleSearchChange = debounce((e, { searchQuery }) => {
		const body = {
			str: searchQuery,
			filter: 'films',
		}
		searchUniverse(body)
	}, 110)
	const handleChange = (e, data) => {
		const film = data.options.find(char => char.value === data.value)
		setFilm(film)
	}
	const options =
		data && data.results
			? data.results.map(result => ({
					text: result.title,
					type: 'films',
					value: result.url,
					id: result.id || nanoid(),
					...result,
			  }))
			: []
	return (
		<Dropdown
			onSearchChange={handleSearchChange}
			loading={isLoading}
			placeholder="Use the force..."
			search
			selection
			onChange={handleChange}
			options={options}
		/>
	)
}
export default FilmSearch
