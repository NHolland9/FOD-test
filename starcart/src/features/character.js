import { createSlice } from '@reduxjs/toolkit'

const createCharacter = (name, id) => ({
	name,
	id,
	filmIds: [],
})

const initialState = createCharacter('', 0)
export const characterSlice = createSlice({
	name: 'character',
	initialState,
	reducers: {
		setCharacter: (state, action) => {
			state.character = createCharacter(action.payload)
		},
	},
})

export const { setCharacter } = characterSlice
