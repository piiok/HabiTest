import Step from './Step.d';

export type FormStore = {
  currentStep: {
    step: Step;
    index: number;
    value: any;
    isLast?: boolean;
    error?: {
      code?: number;
      message: string;
      internalMessage?: string;
    };
  };
  finished?: boolean;
  data: Record<string, string>;
};

type Store = {
  form: FormStore;
};

export default Store;
