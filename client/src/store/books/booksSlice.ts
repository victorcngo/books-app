import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GET_BOOKS } from '../../api/queries/books'

import axios from 'axios'

export const fetchBooks = createAsyncThunk(
  'books/getBooks',
  async (): Promise<any[]> => {
    const response = await axios('http://localhost:4000', {
      method: 'POST',
      data: {
        query: GET_BOOKS,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return response.data
  }
)

interface booksState {
  items: any[]
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: booksState = {
  items: [],
  loading: 'idle',
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action: any) => {
      state.items.push(action.payload)
      console.log(action.payload.data.books)
    })
    builder.addCase(fetchBooks.rejected, (state, action) => {
      console.log('Rejected')
    })
    builder.addCase(fetchBooks.pending, (state, action) => {
      console.log('Pending')
    })
  },
})

export default booksSlice.reducer
