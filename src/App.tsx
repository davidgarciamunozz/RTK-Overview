import { Routes, Route } from 'react-router-dom'
import './App.css'
import BookList from './views/BookList'
import BookForm from './views/BookForm'
import EditBookForm from './views/EditBookForm'
import Init from './components/Counter'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Init/>}/>
      <Route path='/books' element={<BookList/>}/>
      <Route path='/add' element={<BookForm/>}/>
      <Route path='/edit/:id' element={<EditBookForm/>}/>
    </Routes>
  )
}

export default App
