import { createSlice } from '@reduxjs/toolkit';
 import {fetchData} from '../action/apiaction';
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    error: null,
    data: [],
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setData: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
  },

})
export const {
  setLoading,
  setError,
  setData,
} = dataSlice.actions;

export default dataSlice.reducer;
