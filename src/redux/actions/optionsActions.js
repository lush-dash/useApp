import axios from 'axios';
import { CLEAR_OPTIONS, SET_OPTIONS } from '../types';

export const setOptions = (payload) => ({ type: SET_OPTIONS, payload });
export const clearOptions = () => ({ type: CLEAR_OPTIONS });

export const setOptionsThunk = (topicUrl) => (dispatch) => {
  axios.get(topicUrl).then((res) => {
    dispatch(setOptions(res.data));
  }).catch(console.log);
};
