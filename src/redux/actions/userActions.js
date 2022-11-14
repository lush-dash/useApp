import { getName, removeName, saveName } from '../../../utils/storage';
import { GET_CURRENT_USER, REMOVE_CURRENT_USER, SET_CURRENT_USER } from '../types';

export const setUser = (payload) => ({ type: SET_CURRENT_USER, payload });
export const getUser = (payload) => ({ type: GET_CURRENT_USER, payload });
export const removeUser = (payload) => ({ type: REMOVE_CURRENT_USER, payload });

export const setUserThunk = (text) => async (dispatch) => {
  try {
    dispatch(setUser(text));
    await saveName(text);
  } catch (error) {
    console.error(error, 'error1');
  }
};

export const getUserThunk = () => async (dispatch) => {
  try {
    const name = await getName();
    dispatch(getUser(name));
  } catch (error) {
    console.error(error, 'error1');
  }
};

export const removeUserThunk = () => async (dispatch) => {
  try {
    await removeName();
    dispatch(removeUser(''));
  } catch (error) {
    console.error(error);
  }
};
