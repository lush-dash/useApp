import { SET_TOTAL_TIME, SET_RESULT_TIME, CLEAR_TIMER } from '../types';

export const setStart = (payload) => ({ type: SET_TOTAL_TIME, payload });
export const setEnd = (payload) => ({ type: SET_RESULT_TIME, payload });
export const clearTimer = () => ({ type: CLEAR_TIMER });
