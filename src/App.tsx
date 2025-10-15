import { useEffect } from 'react'
import './App.css'
import getAllBooks from './services/openLibrary'


function App() {

  useEffect(() => {
    getAllBooks()
  })

  return (
    <>
    <h1> Redux learning</h1>
    <h3>Books fetching from API:</h3>
    </>
  )
}

export default App
