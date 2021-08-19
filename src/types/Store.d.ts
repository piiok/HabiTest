import Step from './Step.d';

export type FormStore = {
  currentStep: {
    step: Step | undefined;
    index: number;
    value: any;
  };
  data: Record<string, string>;
};

type Store = {
  form: FormStore;
};

export default Store;
