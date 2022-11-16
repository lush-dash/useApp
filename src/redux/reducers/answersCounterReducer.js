import { ADD_BAD_ANSWER, ADD_GOOD_ANSWER, REMOVE_ANSWER } from '../types';

export default function answersCounterReducer(state = {
  goodAnswer: 0,
  badAnswer: 0,
}, action) {
  const { type } = action;
  switch (type) {
    case ADD_GOOD_ANSWER:
      const tempGood = { ...state };
      tempGood.goodAnswer += 1;
      console.log(tempGood, 'tempGood');
      return tempGood;
    case ADD_BAD_ANSWER:
      const tempBad = { ...state };
      tempBad.badAnswer += 1;
      console.log(tempBad, 'tempBad');
      return tempBad;
    case REMOVE_ANSWER:
      const clear = {
        goodAnswer: 0,
        badAnswer: 0,
      };
      return clear;
    default:
      return state;
  }
}
