import { GET_BOOKS } from '../api/queries/books'
import { useQuery } from '@apollo/client'

interface Book {
  id: number
  title: string
  author: string
  rate: number
}

export default function Books() {
  /* API fetch */
  const { data, loading, error } = useQuery(GET_BOOKS)

  if (loading) return <p>Chargement...</p>

  if (error) return <p>Erreur (GET_BOOKS)</p>

  return (
    <section>
      <div>
        <h2>Book list</h2>
        <ul>
          {data.books.map((elem: Book, index: number) => {
            return (
              <li key={index}>
                {elem.title} (id: {elem.id}) author: {elem.author} , rating:{' '}
                {elem.rate} / 20
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
