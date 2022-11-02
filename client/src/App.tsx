import GlobalStyles from './styles/GlobalStyles'

import { Routes, Route } from 'react-router-dom'

import HomePage from './routes/HomePage'
import AuthorsPage from './routes/AuthorsPage'

export default function App() {
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
