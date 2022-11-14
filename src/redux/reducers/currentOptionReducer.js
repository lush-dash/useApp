import { SET_CURRENT_OPTION } from '../types';

export default function currentQuestionReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_OPTION:
      return payload;
    default:
      return state;
  }
}
