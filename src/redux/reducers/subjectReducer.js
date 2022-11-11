import { SET_RUS, SET_SOC } from '../types';

export default function currSubjectReducer(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_RUS:
      return { title: payload, color: '#fbc99c', backgroundImage: '../../../assets/rus.png' };
    case SET_SOC:
      return { title: payload, color: '#b0d0f5', backgroundImage: '../../../assets/soc.png' };
    default:
      return state;
  }
}
