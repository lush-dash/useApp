export const getUser = (payload) => ({ type: 'GET_USER', payload });

export const getUserThunk = (heheh) => (dispatch) => {
  dispatch(getUser(heheh));
};
