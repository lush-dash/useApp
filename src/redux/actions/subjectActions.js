/* eslint-disable import/prefer-default-export */
import { SET_RUS, SET_SOC } from '../types';

export const setCurrentSubject = (payload) => {
  if (payload === 'Русский язык') return ({ type: SET_RUS, payload });
  if (payload === 'Обществознание') return ({ type: SET_SOC, payload });
};
