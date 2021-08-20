import { useRouter } from 'next/router';
import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Head from '@/components/atoms/Head';
import FormContained from '@/components/pages/Form';
import { useSelector } from '@/hooks/redux';
import steps from '@/constants/steps';
import Step from '@/types/Step';

const Form: NextPage<Step> = (props) => {
  const { path } = props;
  const router = useRouter();
  const { currentStep } = useSelector((store) => store.form);
  const { title, description } = currentStep.step;

  if (currentStep.step?.path !== path) {
    router.replace(`/form/${currentStep.step?.path}`);
  }

  return (
    <>
      <Head title={`Formulario | ${title}`} description={description} />
      <FormContained />
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
