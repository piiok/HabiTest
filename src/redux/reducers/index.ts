import { combineReducers } from '@reduxjs/toolkit';
import formReducer from './form';

const reducers = {
  form: formReducer,
};

export default combineReducers(reducers);
