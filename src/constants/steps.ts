import Step from '@/types/Step';

const steps: Step[] = [
  {
    component: 'Text',
    path: 'datos-cliente',
    order: 1,
    description: 'Por favor ingrese su nombre completo',
    backName: 'userFullname',
  },
];
const stepsOrder = steps.sort((step) => step.order);

export default stepsOrder;
