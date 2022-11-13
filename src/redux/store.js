import { configureStore } from '@reduxjs/toolkit';
import topicsReducer from './reducers/topicsReducer';
import optionsReducer from './reducers/optionsReducer';
import questionsReducer from './reducers/questionsReducer';
import userReducer from './reducers/userReducer';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    options: optionsReducer,
    questions: questionsReducer,
    user: userReducer,
  },
});
