import { FC } from 'react';
import NextHead from 'next/head';

type props = {
  title: string;
  description: string;
};

const Head: FC<props> = ({ title, description }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
