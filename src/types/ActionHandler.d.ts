import { ActionCreatorWithPayload, CaseReducer } from '@reduxjs/toolkit';

export type Handler<T, PayloadT = undefined> = CaseReducer<
  T,
  { payload: PayloadT; type: string }
>;

type ActionHandler<T> = {
  action:
    | ActionCreatorWithPayload<T, string>
    | ActionCreatorWithoutPayload<string>;
  handler: Handler<T>;
}[];
export default ActionHandler;
