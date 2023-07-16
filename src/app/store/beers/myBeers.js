import localPersistence from "@/app/persistence/localPersistence"
import { createSlice } from "@reduxjs/toolkit";

const myBeersSlice = createSlice({
    name: 'myBeers',
    initialState: {
        beers: localPersistence.read("myBeers") || [],
        error: ''
    },
    reducers: {
        addNewBeer: (state, action) => {
            const prev = localPersistence.read('myBeers') || []
            localPersistence.store('myBeers', [action.payload.newBeer, ...prev])
            state.beers = [action.payload.newBeer, ...state.beers]
        },
        setError: (state, action) => {
            state.error = action.payload.error
        }
    }
})


export const { addNewBeer, setError } = myBeersSlice.actions

export default myBeersSlice.reducer