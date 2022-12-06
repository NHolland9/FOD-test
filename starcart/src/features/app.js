import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	current: 'films',
}

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setCurrent: (state, action) => {
			state.current = action.payload
		},
	},
})

export const { setCurrent } = appSlice.actions
export const selectCurrent = state => state.app.current
