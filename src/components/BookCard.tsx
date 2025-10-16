import type { Book } from "../types/openLibrary"

export default function BookCard({book} : {book:Book}){
    return (
        <div className="border border-black rounded-2xl mt-10">
        <h3>{book.title}</h3> 
        </div>
    )
}