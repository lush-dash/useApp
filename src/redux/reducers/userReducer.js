import { GET_CURRENT_USER, REMOVE_CURRENT_USER, SET_CURRENT_USER } from '../types';

export default function userReducer(state = '', action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_USER:
      return payload;
    case GET_CURRENT_USER:
      return payload;
    case REMOVE_CURRENT_USER:
      return payload;
    default:
      return state;
  }
}
