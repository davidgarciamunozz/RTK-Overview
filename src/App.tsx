import { useEffect, useState } from 'react'
import './App.css'
import getAllBooks from './services/openLibrary'
import type { Book } from './types/openLibrary'
import BookCard from './components/BookCard'


function App() {

  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
  getAllBooks().then((data) => {
    setBooks(data)
    console.log(data)
  })
  }, [])

  return (
    <>
    <h1> Redux learning</h1>
    <h3>Books fetching from API:</h3>
    {
      books.map((book) => (
        <li key={book.key}>
          <BookCard book={book}/>
        </li>
      ))
    }
    </>
  )
}

export default App
