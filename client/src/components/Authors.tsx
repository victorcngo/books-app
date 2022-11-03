import { GET_AUTHORS } from '../api/queries/authors'
import { useQuery } from '@apollo/client'

interface Author {
  author: string
  id: number
}

export default function Authors() {
  /* API fetch */
  const { data, loading, error } = useQuery(GET_AUTHORS)

  if (loading) return <p>Chargement...</p>

  if (error) return <p>Erreur (GET_AUTHORS)</p>

  return (
    <section>
      <div>
        <h2>Authors</h2>
        <ul>
          {data.authors.map((elem: Author, index: number) => {
            return (
              <li key={index}>
                {elem.author} (id: {elem.id})
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
