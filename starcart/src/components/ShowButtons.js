import { Header, Divider, Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrent, setCurrent } from './../features/app'
const ShowButtons = () => {
	const current = useSelector(selectCurrent)
	const dispatch = useDispatch()
	const handleUpdateCurrent = selected => dispatch(setCurrent(selected))
	const buttons = [
		{
			name: 'films',
			icon: 'film',
		},
		{
			name: 'characters',
			icon: 'users',
		},
		{
			name: 'starships',
			icon: 'rocket',
		},
	]
	return (
		<>
			<Header inverted style={{ display: 'inline-block' }} icon={{ name: 'table' }} content="Star Cart" />
			<Divider hidden />
			<Button.Group>
				{buttons.map(button => (
					<Button
						key={button.name}
						active={current === button.name}
						content={button.name}
						icon={{ name: button.icon }}
						onClick={() => handleUpdateCurrent(button.name)}
					/>
				))}
			</Button.Group>
		</>
	)
}
export default ShowButtons
