import { ADD_BAD_ANSWER, ADD_GOOD_ANSWER, REMOVE_ANSWER } from '../types';

export const addGoodAnswer = () => ({ type: ADD_GOOD_ANSWER });

export const addBadAnswer = () => ({ type: ADD_BAD_ANSWER });

export const deleteAnswer = () => ({ type: REMOVE_ANSWER });
