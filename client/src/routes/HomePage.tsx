import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main className="Home" style={{ padding: '1rem' }}>
      <h1>Homepage</h1>
      <nav>
        <ul>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
        </ul>
      </nav>
      <br />
    </main>
  )
}
