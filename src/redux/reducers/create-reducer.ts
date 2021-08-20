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
    ACTION_HANDLER.forEach(({ action, handler }) =>
      builder.addCase(action, handler),
    );
  });
}
export default createReducer;
