import { GET_AUTHORS } from '../api/queries/authors'

import { useQuery } from '@apollo/client'
import { useEffect } from 'react'

export default function Authors() {
  /* API fetch */
  const { data, loading, error } = useQuery(GET_AUTHORS)

  useEffect(() => {
    console.log(data)
  }, [data])

  if (loading) return <p>Chargement...</p>

  if (error) return <p>Erreur (GET_BOOKS)</p>

  interface Author {
    author: string
    id: number
  }

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
