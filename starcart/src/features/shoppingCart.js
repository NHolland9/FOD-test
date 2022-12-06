import { createSlice, nanoid } from '@reduxjs/toolkit'

const createItem = item => ({
	id: nanoid(),
	...item,
})
const initialState = {
	items: [],
	total: 0,
	prices: {
		people: 10,
		starships: 20,
		vehicles: 5.5,
		planets: 100,
		films: 12.99,
	},
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducer: {
		addItem: (state, action) => {
			// create item
			// add item to items
		},
		removeItem: (state, action) => {
			// find fave
			// remove fave
		},
	},
})

export const { addItem, removeItem } = cartSlice
