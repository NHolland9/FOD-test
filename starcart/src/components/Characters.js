import { Button, Card, Loader, Message } from 'semantic-ui-react'
import { useGetCharactersQuery } from '../services/swapApi'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { addFave } from '../features/faves'
import usePagination from '../hooks/pagination'


const Characters = () => {
  const paginationData = usePagination()
  const { data, isError, isLoading } = useGetCharactersQuery(paginationData.activePage)
	const dispatch = useDispatch()

	const selectcharacter = e => {
		const { title } = e.currentTarget.dataset
		const character = data.results.find(character => character.name === title)
		return character
	}

	const addToFavourites = e => dispatch(addFave(selectcharacter(e)))

	if (isLoading) {
		return <Loader active={isLoading} />
	}
	if (isError) {
		return <Message error={isError}>There was an error</Message>
	}
	if (data && Boolean(data?.results?.length)) {
		return (
      <>
        <Card.Group centered>
          {data.results.map(character => (
            <Card key={nanoid()}>
              <Card.Content>
                <Card.Header>{character.name}</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Button
                  icon={{ name: 'plus', size: 'small' }}
                  data-title={character.name}
                  positive
                  content="Add to faves"
                  onClick={addToFavourites}
                />
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
        <Card.Group centered>
          {data.previous && (
            <Button
              content="Previous"
              onClick={() => paginationData.prevPage()}
            />
          )}
          {data.next && (
            <Button
              content="Next"
              onClick={() => paginationData.nextPage()}
            />
          )}
        </Card.Group>
      </>
		)
	} else if (data?.results?.length === 0) {
		return <Message warning>no characters found</Message>
	}
	return null
}
export default Characters
