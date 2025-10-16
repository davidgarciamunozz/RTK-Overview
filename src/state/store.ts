import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './books/BookSlice'

export const store = configureStore({
    reducer: {
        books: bookReducer
    }
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>