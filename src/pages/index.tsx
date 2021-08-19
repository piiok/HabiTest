import type { NextPage } from 'next';
import Head from '@/components/atoms/Head';
import HomeContained from '@/components/pages/Home';

const Home: NextPage = () => {
  return (
    <>
      <Head
        title="Vende tu apartamento"
        description="Te ayudaremos a vender tu apartamento! Sin complicaciones, facil y seguro!"
      />
      <HomeContained />
    </>
  );
};

export default Home;
