import {configureStore} from '@reduxjs/toolkit';
import documentReducer from './documentSlice';
import profileReducer from './profileSlice';
const store = configureStore({
  reducer: {
    document: documentReducer,
    profile: profileReducer,
  },
});

export default store;
