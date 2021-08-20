import { createAction } from '@reduxjs/toolkit';

const actionName = (prefix: string, actionName: string) => prefix + actionName;

const formPrefix = 'form/';
export const FORM = {
  UPDATE: createAction(actionName(formPrefix, 'update')),
  NEXT_STEP: createAction(actionName(formPrefix, 'next-step')),
};

const ALL_ACTIONS = {
  FORM,
};

export default ALL_ACTIONS;
