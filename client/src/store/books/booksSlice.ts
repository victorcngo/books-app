import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { useQuery } from '@apollo/client'
import { GET_BOOKS } from '../../api/queries/books'
import { Book } from './../../components/Books'

import axios from 'axios'

export const fetchBooks = createAsyncThunk(
  'books/getBooks',
  async (obj, thunkAPI): Promise<any[]> => {
    const response = await axios('http://localhost:4000', {
      method: 'post',
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
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.items.push(action.payload)
    })
  },
})

export default booksSlice.reducer
