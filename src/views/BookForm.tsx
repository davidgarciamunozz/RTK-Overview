import { useState } from "react"
import { useNavigate } from "react-router-dom"
import type { Book } from "../types/openLibrary"
import { useDispatch } from "react-redux"
import { addBook } from "../state/books/BookSlice"

export default function BookForm() {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [year, setYear] = useState(new Date().getFullYear().toString())

  const navigate = useNavigate() 
  const dispatch = useDispatch()
  

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()

    const newBook:Book = {
      key: crypto.randomUUID(),
      title,
      author_name: author,
      first_publish_year: parseInt(year)
    }

    dispatch(addBook(newBook))
    navigate('/books')

    
  }
    return (
      <>
        <h1>Edit Book Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-10 mt-10">
          <input
            className="border-none bg-gray-50 p-4"
            type="text"
            placeholder="Enter book title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            className="border-none bg-gray-50 p-4"
            type="text"
            placeholder={'Insert Author'}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />

          <input
            className="border-none bg-gray-50 p-4"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>

        <div className="flex gap-5 justify-center">
          <button type="submit" className="mt-5">
            Add Book
          </button>
          <button type="button" onClick={() => navigate('/books')} className="mt-5">
            Cancel
          </button>
        </div>
      </form>
      </>
    )
}