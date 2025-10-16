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
        },
        deleteBook: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter((book => book.key !== action.payload))
        },
        editBook: (state, action:PayloadAction<Book>) => {
            const index = state.books.findIndex(book => book.key === action.payload.key)
            if (index !== -1) {
                state.books[index] = action.payload
            }
        }

    }
})

export const {setBooks, deleteBook, editBook} = bookSlice.actions
export default bookSlice.reducer