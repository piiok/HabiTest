import type { NextPage } from 'next';
import Head from '@/components/atoms/Head';
import SuccessContained from '@/components/pages/Form/Success';

const Form: NextPage = () => {
  return (
    <>
      <Head
        title="Formulario completado"
        description="Formulario completado con exito, ¡nos pondremos en contacto contigo!"
      />
      <SuccessContained />
    </>
  );
};

export default Form;
