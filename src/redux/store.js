import { configureStore } from '@reduxjs/toolkit';
import topicsReducer from './reducers/topicsReducer';
import optionsReducer from './reducers/optionsReducer';
import questionsReducer from './reducers/questionsReducer';
import currSubjectReducer from './reducers/subjectReducer';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    options: optionsReducer,
    questions: questionsReducer,
    currSubject: currSubjectReducer,
  },
});
