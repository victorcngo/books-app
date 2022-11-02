import { GET_AUTHORS } from '../api/queries/authors'

import { useQuery } from '@apollo/client'
import { useEffect } from 'react'

export default function Authors() {
  /* API fetch */
  const { data } = useQuery(GET_AUTHORS)

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <section>
      <div>
        <h2>Authors</h2>
        <ul>
          <li></li>
        </ul>
      </div>
    </section>
  )
}
