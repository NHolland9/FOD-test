import { useSelector } from 'react-redux'
import { List, Message } from 'semantic-ui-react'
import { selectFaveState } from '../../features/faves'
import Fave from './FaveContainer.tsx'

const Faves = () => {
	const faves = useSelector(selectFaveState)
	if (!faves) {
		return <Message header="no faves" />
	}
	return (
		<List horizontal divided>
			{faves.map(fave => (
				<Fave key={fave.id} fave={fave} />
			))}
		</List>
	)
}

export default Faves
