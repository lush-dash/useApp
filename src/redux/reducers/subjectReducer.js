import {
  SET_ELBRUS, SET_HISTORY, SET_RUS, SET_SOC,
} from '../types';

export default function currSubjectReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_RUS:
      return { title: payload, color: '#fbc99c' };
    case SET_SOC:
      return { title: payload, color: '#b0d0f5' };
    case SET_HISTORY:
      return { title: payload, color: '#c1e6ee' };
    case SET_ELBRUS:
      return { title: payload, color: '#e3e3fe' };
    default:
      return state;
  }
}
