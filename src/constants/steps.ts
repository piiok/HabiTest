import Step from '@/types/Step';

const steps: Step[] = [
  {
    title: 'Datos cliente',
    component: 'Text',
    path: 'datos-cliente',
    order: 1,
    description: 'Por favor ingrese su nombre completo.',
    backName: 'userFullname',
  },
  {
    title: 'Datos barrio',
    component: 'Text',
    path: 'datos-barrio',
    order: 2,
    description: 'Por favor el nombre completo del barrio.',
    backName: 'neighborhood',
  },
];
const stepsOrder = steps.sort((step) => step.order);

export default stepsOrder;
