import axios from 'axios';
import { SET_TOPICS } from '../types';

export const setTopics = (payload) => ({ type: SET_TOPICS, payload });

export const setTopicsThunk = () => (dispatch) => {
  axios.get('https://useapp.ams3.digitaloceanspaces.com/allTopic.json').then((res) => {
    dispatch(setTopics(res.data));
  }).catch(console.log);
};
