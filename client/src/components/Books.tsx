import { GET_BOOKS } from '../api/queries/books'
import { useQuery } from '@apollo/client'

import type { RootState } from './../store'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'

import { fetchBooks } from '../store/books/booksSlice'

export interface Book {
  id: number
  title: string
  author: string
  rate: number
}

export default function Books() {
  const items = useSelector((state: RootState) => state.books.items)
  const dispatch = useDispatch()

  // dispatch(fetchBooks())

  // if (loading) return <p>Chargement...</p>

  // if (error) return <p>Erreur (GET_BOOKS)</p>

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
