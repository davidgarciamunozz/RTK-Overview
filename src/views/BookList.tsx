import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../state/store"
import getAllBooks from "../services/openLibrary"
import { setBooks } from "../state/books/BookSlice"
import BookCard from "../components/BookCard"
import type { Book } from "../types/openLibrary"

export default function BookList() {
//Access to the global state of RTK
const books = useSelector((state:RootState) => state.books.books)
const dispatch = useDispatch()

    useEffect (() => {
        if (books.length === 0) {
            getAllBooks().then((data) => {
                if (data) {
                    dispatch(setBooks(data))
                }
            })
        }
    }, [books.length, dispatch])



    return (
        <>
        <h1>Book list</h1>
        {
            books.map((book:Book) => (
                <div key={book.key}>
                    <BookCard book={book} />
                </div>
            ))
        }
        </>
    )
}