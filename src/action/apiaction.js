import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk(
  'data/fetch',
  async (params, { dispatch }) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos', { params });
    return response.data
  }
);