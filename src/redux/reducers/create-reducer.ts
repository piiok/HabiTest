import {
  createReducer as createReducerRTK,
  Reducer,
  AnyAction,
} from '@reduxjs/toolkit';
import ActionHandler from '@/types/ActionHandler';

function createReducer<T>(
  initialState: T,
  ACTION_HANDLER: ActionHandler<T>,
): Reducer<T, AnyAction> {
  return createReducerRTK(initialState, (builder) => {
    builder.addCase(ACTION_HANDLER[0].action, ACTION_HANDLER[0].handler);
  });
}
export default createReducer;
