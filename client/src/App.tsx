import GlobalStyles from './styles/GlobalStyles'

import { Routes, Route } from 'react-router-dom'

import HomePage from './routes/HomePage'
import BooksPage from './routes/BooksPage'
import AuthorsPage from './routes/AuthorsPage'

export default function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="authors" element={<AuthorsPage />} />
      </Routes>
    </div>
  )
}
