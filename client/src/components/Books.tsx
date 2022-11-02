import type { RootState } from '../store'
import { useSelector, useDispatch } from 'react-redux'

import { GET_BOOKS } from '../api/queries/books'

import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'

export default function Books() {
  /* API fetch */
  const { data, loading, error } = useQuery(GET_BOOKS)

  useEffect(() => {
    console.log(data)
  }, [data])

  if(loading) return <p>Chargement...</p>;

  if(error) return <p>Erreur (GET_BOOKS)</p>;

  return (
    <section>
      <div>
        <h2>Book list</h2>
        <ul>
          {data.books.map((elem:any, index:number) => {
            return (
              <li key={index}>
                {elem.title} (id: {elem.id}) author: {elem.author} , rating: {elem.rate} / 20
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
