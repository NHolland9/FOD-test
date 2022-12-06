import { createSlice } from '@reduxjs/toolkit'

// const createCharacter = ({ id, name, ...details }) => ({
//   id,
//   name,
//   height: "",
//   mass: "",
//   hair_color: "",
//   skin_color: "",
//   eye_color: "",
//   birth_year: "",
//   gender: "",
//   homeworld: "",
//   url: "",
//   ...details,
// });
//   films: [],
//   starships: [],

//     ...details,
const initialState = {
	id: '',
	name: '',
	height: '',
	mass: '',
	hair_color: '',
	skin_color: '',
	eye_color: '',
	birth_year: '',
	gender: '',
	homeworld: '',
	url: '',
}
export const filmSlice = createSlice({
	name: 'film',
	initialState,
	reducers: {
		setFilm: (state, action) => {
			const film = action.payload
			state.film = film
		},
		resetFilm: () => {
			return initialState
		},
	},
})

export const { setFilm } = filmSlice
