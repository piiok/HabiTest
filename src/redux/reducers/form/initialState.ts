import steps from '@/constants/steps';
import { FormStore } from '@/types/Store.d';

const index = 0;
export const initialCurrentStep = {
  step: { ...steps[index] },
  index: steps[index] ? index : -1,
  isLast: index === steps.length - 1,
  value: '',
};

const initalState: FormStore = {
  currentStep: initialCurrentStep,
  data: {},
};

export default initalState;
