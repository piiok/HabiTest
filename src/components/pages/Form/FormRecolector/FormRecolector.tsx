import Input from '@/components/atoms/Fields/Input';
import Typography from '@/components/atoms/Typography';
import { useSelector } from '@/hooks/redux';

import { DivStyled } from './FormRecolector.styles';

const FormRecolector = () => {
  const { title, description, backName } = useSelector(
    (store) => store.form.currentStep.step,
  );
  return (
    <>
      <Typography
        align="center"
        bold
        color="primary"
        component="h1"
        variant="h6"
      >
        {title}
      </Typography>
      <Typography variant="body1" component="p" color="gray" bold>
        {description}
      </Typography>
      <DivStyled>
        <Input id={backName} fullWidth />
      </DivStyled>
    </>
  );
};

export default FormRecolector;
