import { FormStore } from '@/types/Store';
import ActionHandler, { Handler } from '@/types/ActionHandler';
import { FORM } from '../../action-type';

const updateHandler: Handler<FormStore, any> = (state, action) => {
  return {
    ...state,
    currentStep: { ...state.currentStep, value: action.payload },
  };
};

const nextStepHandler: Handler<FormStore> = (state, action) => {
  return {
    ...state,
    currentStep: { ...state.currentStep, value: action.payload },
  };
};

const ACTION_HANDLER: ActionHandler<FormStore> = [
  {
    action: FORM.UPDATE,
    handler: updateHandler,
  },
  {
    action: FORM.NEXT_STEP,
    handler: nextStepHandler,
  },
];

export default ACTION_HANDLER;
