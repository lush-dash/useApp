import { SET_CURRENT_QESTION } from '../types';

export default function currentQuestionReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_QESTION:
      return payload;
    default:
      return state;
  }
}
