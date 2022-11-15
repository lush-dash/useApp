import { CLEAR_QUESTIONS, SET_QUESTIONS } from '../types';

export default function questionsReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SET_QUESTIONS:
      return payload;
    case CLEAR_QUESTIONS:
      return [];
    default:
      return state;
  }
}
