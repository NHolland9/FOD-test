import { useState } from 'react'
import { Checkbox, Segment } from 'semantic-ui-react'
import FilmSearch from './FilmSearch'
const SearchApi = () => {
	const [checked, setChecked] = useState('films')
	return (
		<>
			{checked === 'films' && <FilmSearch />}
			{checked === 'people' && <h4>add character search</h4>}
			<Segment padded>
				<Checkbox radio label="Films" onChange={() => setChecked('films')} checked={checked === 'films'} />
				<Checkbox radio label="Characters" onChange={() => setChecked('people')} checked={checked === 'people'} />
			</Segment>
		</>
	)
}

export default SearchApi
