import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    
  name: 'data',
  initialState: {
    data: [],
    error: null,
    loading: false,
  },
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
    },
    fetchDataSuccess(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDataError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});


export const {fetchDataStart,fetchDataSuccess,fetchDataError} = dataSlice.actions;

export default dataSlice.reducer;

