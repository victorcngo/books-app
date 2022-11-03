import type { RootState } from './../store'

import { useSelector } from 'react-redux'

export interface Book {
  id: number
  title: string
  author: string
  rate: number
}

export default function Books() {
  const items = useSelector((state: RootState) => state.books.items)
  const status = useSelector((state: RootState) => state.books.loading)

  if (status === "pending") return <p>Chargement...</p>

  if (status === "failed") return <p>Erreur (GET_BOOKS)</p>

  return (
    <section>
      <div>
        <h2>Book list</h2>
        <ul>
          {items.map((elem: Book, index: number) => {
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
