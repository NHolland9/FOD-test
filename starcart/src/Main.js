import { Grid } from 'semantic-ui-react'
import ShowButtons from './components/ShowButtons'
import Faves from './components/Faves'
const Main = () => {
	return (
		<Grid stackable textAlign="center" style={{ margin: '0 auto' }}>
			<Grid.Row>
				<Faves />
			</Grid.Row>
			<Grid.Row verticalAlign="middle">
				<Grid.Column>
					<ShowButtons />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	)
}
export default Main
