import { GET_USER } from '../types';

export default function userReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return payload;
    default:
      return state;
  }
}
