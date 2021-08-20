import { createAction } from '@reduxjs/toolkit';
import { FormStore } from '@/types/Store';
import ActionHandler, { Handler } from '@/types/ActionHandler';
import steps from '@/constants/steps';
import { initialCurrentStep } from './initialState';
import { FORM } from '../../action-type';

export const update = createAction<any>(FORM.UPDATE);
const updateHandler: Handler<FormStore, any> = (state, action) => ({
  ...state,
  currentStep: { ...state.currentStep, value: action.payload },
});

export const nextStep = createAction(FORM.NEXT_STEP);
const nextStepHandler: Handler<FormStore> = (state) => {
  const { data, currentStep } = state;
  const newIndex = currentStep.index + 1;
  if (currentStep.step.required && currentStep.value === '') {
    return {
      ...state,
      currentStep: {
        ...currentStep,
        error: {
          message: 'Campo requerido',
        },
      },
    };
  }
  return {
    data: {
      ...data,
      [currentStep.step.backName]: currentStep.value,
    },
    currentStep: {
      ...initialCurrentStep,
      step: { ...steps[newIndex] },
      index: newIndex,
      isLast: newIndex === steps.length - 1,
    },
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
