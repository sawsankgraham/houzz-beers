import { configureStore } from "@reduxjs/toolkit";
import allBeersReducer from '../store/beers/allBeers'
import myBeersReducer from '../store/beers/myBeers'

export const store = configureStore({
    reducer: {
        allBeers: allBeersReducer,
        myBeers: myBeersReducer
    }
})