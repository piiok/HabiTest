type Step = {
  title: string;
  component: 'Text';
  path: string;
  order: number;
  description: string;
  backName: string;
  required?: boolean;
};

export default Step;
