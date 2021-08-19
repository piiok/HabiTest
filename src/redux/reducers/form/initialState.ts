import steps from '@/constants/steps';
import { FormStore } from '@/types/Store.d';

const initalState: FormStore = {
  currentStep: {
    step: steps[0],
    index: steps[0] ? 0 : -1,
    value: '',
  },
  data: {},
};

export default initalState;
