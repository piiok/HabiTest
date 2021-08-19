import { createAction } from '@reduxjs/toolkit';
import { FormStore } from '@/types/Store';
import ActionHandler, { Handler } from '@/types/ActionHandler';
import { FORM } from '../../action-type';

const update = createAction(FORM.UPDATE);
const updateHandler: Handler<FormStore, any> = (state, action) => {
  return {
    ...state,
    currentStep: { ...state.currentStep, value: action.payload },
  };
};

const nextStep = createAction(FORM.NEXT_STEP);
const nextStepHandler: Handler<FormStore> = (state, action) => {
  return {
    ...state,
    currentStep: { ...state.currentStep, value: action.payload },
  };
};

const ACTION_HANDLER: ActionHandler<FormStore> = [
  {
    action: update,
    handler: updateHandler,
  },
  {
    action: nextStep,
    handler: nextStepHandler,
  },
];

export default ACTION_HANDLER;
