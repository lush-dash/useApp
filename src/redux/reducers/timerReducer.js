/* eslint-disable no-case-declarations */
import { CLEAR_TIMER, SET_RESULT_TIME, SET_TOTAL_TIME } from '../types';

export default function timerReducer(state = { start: 0, end: 0 }, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TOTAL_TIME:
      const obj = { ...state };
      obj.start = payload;
      return obj;
    case SET_RESULT_TIME:
      const obj1 = { ...state };
      obj1.end = payload;
      return obj1;
    case CLEAR_TIMER:
      return { start: 0, end: 0 };
    default:
      return state;
  }
}
