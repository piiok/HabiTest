import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Head from '@/components/atoms/Head';
import FormContained from '@/components/pages/Form';
import steps from '@/constants/steps';
import Step from '@/types/Step';

const Form: NextPage<Step> = ({ ...others }) => {
  return (
    <>
      <Head
        title="Datos cliente"
        description="Te ayudaremos a vender tu apartamento! Sin complicaciones, facil y seguro!"
      />
      hello
      <FormContained {...others} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    ...steps.map((step) => ({
      params: {
        step: step.path,
      },
    })),
  ],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { step: URLStep } = params || {};

  const data = URLStep
    ? steps.find((step) => step.path === URLStep)
    : undefined;
  if (!data) {
    return {
      notFound: true,
    };
  }
  return { props: data };
};

export default Form;
