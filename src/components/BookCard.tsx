import type { Book } from "../types/openLibrary";

//treat it like singular elements -> book instead of 'books'

export default function BookCard({book}:{book:Book}) {
    return (
        <div className="mt-10 border border-black rounded-2xl">
            <h2>{book.title}</h2>
            <p>{book.author_name}</p>
            <p>{book.first_publish_year}</p>
        </div>
    )
}