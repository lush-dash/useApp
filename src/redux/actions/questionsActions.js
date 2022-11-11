import axios from 'axios';
import { SET_QUESTIONS } from '../types';

export const setQuestions = (payload) => ({ type: SET_QUESTIONS, payload });

export const setQuestionsThunk = (optionUrl) => (dispatch) => {
  axios.get(optionUrl).then((res) => {
    dispatch(setQuestions(res.data));
  }).catch(console.log);
};
