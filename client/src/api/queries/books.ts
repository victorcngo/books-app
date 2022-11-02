import gql from 'graphql-tag'

export const GET_BOOKS = gql`
  query Books {
    books {
      id
      title
      author
      rate
    }
  }
`
