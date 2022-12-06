import { createSlice, current, nanoid } from '@reduxjs/toolkit'

const createFave = (fave, name) => ({
	id: nanoid(),
	rating: 5,
	name,
	...fave,
})
const initialState = []

export const favesSlice = createSlice({
	name: 'faves',
	initialState,
	reducers: {
		addFave: (state, action) => {
      if (!current(state).find(fave => fave.name === action.payload.title)) {
        const name = action.payload.name ? action.payload.name : action.payload.title ? action.payload.title : 'no name'
        const fave = createFave(action.payload, name)
        state.push(fave)
      }
		},
		updateFave: (state, action) => {
			// find fave
			// update fave with array of ids if none exists,
			// or add related id if doesn't exist in array already
			// return state
		},
		rateFave: (state, action) => {
			// find fave
			// update new on that fave
			// return state
		},
		removeFave: (state, action) => {
      function filterFunc(film) {
        return film.title !== action.payload.title
      }
      let testArray = current(state);
      testArray = testArray.filter(filterFunc);
      return testArray

			/* * make sure to return the whole state because it's just a single array of faves */
      // return state.???
		},
	},
})

export const { addFave, removeFave, rateFave } = favesSlice.actions
export const selectFaveState = state => state.faves
