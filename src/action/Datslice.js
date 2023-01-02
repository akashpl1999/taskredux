import axios from 'axios';
import { fetchDataStart, fetchDataSuccess, fetchDataError } from '../Redux/A1';

export const getData = () => async (dispatch) => {
  try {
    dispatch(fetchDataStart());
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataError(error.message));
  }
};
