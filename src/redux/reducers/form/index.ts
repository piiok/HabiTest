import initialState from './initialState';
import createReducer from '../create-reducer';
import ACTION_HANDLER from './handler';
import { FormStore } from '@/types/Store';

const formReducer = createReducer<FormStore>(initialState, ACTION_HANDLER);
export default formReducer;
