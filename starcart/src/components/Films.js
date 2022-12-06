import { Button, Card, Loader, Message } from 'semantic-ui-react'
import { useGetFilmsQuery } from '../services/swapApi'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { addFave, removeFave } from '../features/faves'
import FilmDetails from './FilmDetails'

const Films = () => {
	const { data, isError, isLoading } = useGetFilmsQuery()
	const dispatch = useDispatch()

	const selectFilm = e => {
		const { title } = e.currentTarget.dataset
		const film = data.results.find(film => film.title === title)
		return film
	}
	const addToFavourites = e => dispatch(addFave(selectFilm(e)))
	const removeFromFavourites = e => dispatch(removeFave(selectFilm(e)))

	if (isLoading) {
		return <Loader active={isLoading} />
	}
	if (isError) {
		return <Message error={isError}>There was an error</Message>
	}
	if (data && Boolean(data?.results?.length)) {
		return (
			<Card.Group centered>
				{data.results.map(film => (
					<Card key={nanoid()}>
						<Card.Content>
							<Card.Header>{film.title}</Card.Header>
							{film && film.characters && <Card.Meta> characters : {film.characters.length}</Card.Meta>}
							<Card.Description>{film.opening_crawl}</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<FilmDetails details={film} />
							<Button
								icon={{ name: 'plus', size: 'small' }}
								data-title={film.title}
								positive
								content="Add to faves"
								onClick={addToFavourites}
							/>
							<Button
								icon={{ name: 'plus', size: 'small' }}
								data-title={film.title}
								positive
								content="Remove from faves"
								onClick={removeFromFavourites}
							/>
						</Card.Content>
					</Card>
				))}
			</Card.Group>
		)
	} else if (data?.results?.length === 0) {
		return <Message warning>no films found</Message>
	}
	return null
}
export default Films
