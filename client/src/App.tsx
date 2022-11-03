import GlobalStyles from './styles/GlobalStyles'

import { Routes, Route } from 'react-router-dom'

import HomePage from './routes/HomePage'
import AuthorsPage from './routes/AuthorsPage'

import { AppDispatch } from './store'
import { useDispatch } from 'react-redux'
import { fetchBooks } from './store/books/booksSlice'
import { useEffect } from 'react'

export default function App() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="authors" element={<AuthorsPage />} />
      </Routes>
    </div>
  )
}
