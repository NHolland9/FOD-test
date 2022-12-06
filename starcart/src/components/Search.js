import { Header, Icon } from 'semantic-ui-react'
import SearchApi from './SearchApi'

const Search = () => (
	<>
		<Header icon>
			<Icon name="search" />
			Search
		</Header>
		<SearchApi />
	</>
)
export default Search
