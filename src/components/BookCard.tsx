import { useDispatch } from "react-redux"
import type { Book } from "../types/openLibrary"
import {deleteBook} from '../state/books/BookSlice'
import { useNavigate } from "react-router-dom"

export default function BookCard({book} : {book:Book}){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className="border border-black rounded-2xl mt-10 p-2">
        <h3 className="font-bold">{book.title}</h3> 
        <p>{book.author_name}</p>
        <p>{book.first_publish_year}</p>

        <button onClick={() => dispatch(deleteBook(book.key))}> Eliminar </button>
        <button onClick={() => navigate(`/edit/${book.lending_edition_s}`)}> Editar </button>
        </div>
    )
}