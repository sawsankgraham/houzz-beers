import { createSlice } from "@reduxjs/toolkit";

const allBeersSlice = createSlice({
    name: 'allBeers',
    initialState: {
        beers: [],
        error: ''
    },
    reducers: {
        setBeers: (state, action) => {
            state.beers.push(...action.payload.beers)
        },
        setError: (state, action) => {
            state.error = action.payload.error
        }
    }
})


export const { setBeers, setError } = allBeersSlice.actions

export default allBeersSlice.reducer