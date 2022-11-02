import type { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'

import { GET_BOOKS } from '../api/queries/books'

import { useQuery } from '@apollo/client'
import { useEffect } from 'react'

export default function Books() {
  /* API fetch */
  const { data } = useQuery(GET_BOOKS)

  useEffect(() => {
    console.log(data)
  }, [data])

  /* WIP */
  const books = useSelector((state: RootState) => state.books.items)

  return (
    <section>
      <div>
        <h2>Books from API fetch</h2>
      </div>
      <div>
        <h2>Books in app store</h2>
        <ul>
          {books.map((elem, index) => {
            return (
              <li key={index}>
                {elem.title} (id: {elem.id})
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
