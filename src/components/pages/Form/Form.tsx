import { FC } from 'react';
import Step from '@/types/Step';
import Input from '@/components/atoms/Fields/Input';

const Form: FC<Step> = () => {
  return (
    <h1>
      Holiwis
      <Input id="hola" fullWidth />
    </h1>
  );
};

export default Form;
