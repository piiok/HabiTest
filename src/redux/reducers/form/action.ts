import { createAction } from '@reduxjs/toolkit';
import { FormStore } from '@/types/Store';
import ActionHandler, { Handler } from '@/types/ActionHandler';
import steps from '@/constants/steps';
import initialState, { initialCurrentStep } from './initialState';
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

export const finish = createAction(FORM.FINISH);
const finishHandler: Handler<FormStore> = (state) => {
  const { data, currentStep } = state;
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
    ...initialState,
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
  {
    action: finish,
    handler: finishHandler,
  },
];

export default ACTION_HANDLER;
