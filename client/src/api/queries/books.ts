import gql from 'graphql-tag'

export const GET_BOOKS = `
  query Books {
    books {
      id
      title
      author
      rate
    }
  }
`
