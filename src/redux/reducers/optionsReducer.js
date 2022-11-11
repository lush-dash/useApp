import { SET_OPTIONS } from '../types';

export default function optionsReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SET_OPTIONS:
      return payload;
    default:
      return state;
  }
}
