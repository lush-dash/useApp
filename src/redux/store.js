import { configureStore } from '@reduxjs/toolkit';
import topicsReducer from './reducers/topicsReducer';

export default configureStore({
  reducer: {
    topics: topicsReducer,
  },
});
