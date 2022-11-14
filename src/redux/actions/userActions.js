import { getName, saveName } from '../../../utils/storage';
import { GET_CURRENT_USER, REMOVE_CURRENT_USER, SET_CURRENT_USER } from '../types';

export const setUser = (payload) => ({ type: SET_CURRENT_USER, payload });
export const getUser = (payload) => ({ type: GET_CURRENT_USER, payload });
export const removeUser = () => ({ type: REMOVE_CURRENT_USER });

export const setUserThunk = (text) => async (dispatch) => {
  try {
    await dispatch(setUser(saveName(text)));
  } catch (error) {
    console.error(error);
  }
};

export const getUserThunk = () => async (dispatch) => {
  try {
    const name = await getName();
    console.log(name, 'actionsss');
    dispatch(getUser(name));
  } catch (error) {
    console.error(error);
  }
};

export const removeUserThunk = () => (dispatch) => {
  try {
    // const name =
    dispatch(removeUser());
  } catch (error) {
    console.error(error);
  }
};
