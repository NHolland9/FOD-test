import { createSlice } from '@reduxjs/toolkit'

const initialState = {}
const CharacterSlice = createSlice({
	name: 'details',
	initialState,
	reducers: {
		setDetails: (state, action) => {
			state = action.payload
			return state
		},
	},
})

export const { setDetails } = CharacterSlice
