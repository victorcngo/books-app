import { Link } from 'react-router-dom'

import Books from './../components/Books'

export default function HomePage() {
  return (
    <main className="Home" style={{ padding: '1rem' }}>
      <h1>Homepage</h1>
      <nav>
        <ul>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
        </ul>
      </nav>
      <Books />
      <br />
    </main>
  )
}
