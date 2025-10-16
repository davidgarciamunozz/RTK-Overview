import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Book } from "../../types/openLibrary";

interface BooksState {
    books : Book[]
}

const initialState:BooksState = {
    books: []
}

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action:PayloadAction<Book[]>) => {
            state.books = action.payload
        }
    }
})

export const {setBooks} = bookSlice.actions
export default bookSlice.reducer