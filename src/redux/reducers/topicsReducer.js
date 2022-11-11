import { SET_TOPICS } from '../types';

export default function topicsReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TOPICS:
      return payload;
    default:
      return state;
  }
}
