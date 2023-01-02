import { createReducer } from '@reduxjs/toolkit';
import { FETCH_DATA_SUCCESS, FETCH_DATA_ERROR ,FETCH_DATA_LOADING} from '../action/Dataapi';

const initialState = {
  data: [],
  error: null,
  loading:false
};

const dataReducer = createReducer(initialState, {
  
  [FETCH_DATA_SUCCESS]: (state, action) => {
    state.data = action.payload;
  },
  [FETCH_DATA_ERROR]: (state, action) => {
    state.error = action.payload;
  },
  [FETCH_DATA_LOADING]:(state,action)=>{
    state.loading=action.payload
  }
});

export default dataReducer;
