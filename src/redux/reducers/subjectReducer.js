import {
  SET_ELBRUS, SET_HISTORY, SET_RUS, SET_SOC,
} from '../types';

export default function currSubjectReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_RUS:
      return { title: payload, color: '#fbc99c', darkColor: '#e9a565' };
    case SET_SOC:
      return { title: payload, color: '#b0d0f5', darkColor: '#518ed9' };
    case SET_HISTORY:
      return { title: payload, color: '#c1e6ee', darkColor: '#618f99' };
    case SET_ELBRUS:
      return { title: payload, color: '#e3e3fe', darkColor: '#674fa4' };
    default:
      return state;
  }
}
