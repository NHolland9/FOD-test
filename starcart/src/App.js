import React from 'react'
import { Container, Header, Menu, Segment } from 'semantic-ui-react'
import { selectCurrent } from './features/app'
import Main from './Main'
import { useSelector } from 'react-redux'
import Films from './components/Films'
import Characters from './components/Characters'
function App() {
	const current = useSelector(selectCurrent)
	return (
		<>
			<Container fluid>
				<Segment inverted>
					<Header as="h1" content="Star Cart 🚀" />
					<Menu pointing secondary></Menu>
					<Main />
				</Segment>
			</Container>
			<Container>
				<Segment>
					{current === 'films' && <Films />}
					{current === 'characters' && <Characters />}
				</Segment>
			</Container>
		</>
	)
}

export default App
