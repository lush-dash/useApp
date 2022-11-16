import { CLEAR_OPTIONS, SET_OPTIONS } from '../types';

export default function optionsReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SET_OPTIONS:
      return payload;
    case CLEAR_OPTIONS:
      return [];
    default:
      return state;
  }
}
