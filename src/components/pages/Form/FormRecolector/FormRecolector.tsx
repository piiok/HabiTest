import { useCallback, FC, ChangeEvent } from 'react';
import Input from '@/components/atoms/Fields/Input';
import Grid from '@/components/atoms/Grid';
import Typography from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';
import ProgessiveBar from '@/components/atoms/ProgessiveBar';

import steps from '@/constants/steps';
import { useSelector, useDispatch } from '@/hooks/redux';
import { update, nextStep, finish } from '@/redux/reducers/form/action';

import { DivStyled } from './FormRecolector.styles';

const FormRecolector: FC = ({ children }) => {
  const dispatch = useDispatch();
  const {
    step: { title, description, backName },
    error,
    index,
    value,
    isLast,
  } = useSelector((store) => store.form.currentStep);

  const handleStepValue = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      const value = target.value || '';
      dispatch(update(value));
    },
    [],
  );

  const onClickNext = () =>
    isLast ? dispatch(finish()) : dispatch(nextStep());

  return (
    <>
      <ProgessiveBar total={steps.length} completed={index} />
      <Typography
        align="center"
        bold
        color="primary"
        component="h1"
        variant="h6"
        style={{ marginTop: '20px', marginBottom: '20px' }}
      >
        {title}
      </Typography>
      <Typography variant="body1" component="p" color="gray" bold>
        {description}
      </Typography>
      <DivStyled>
        <Input
          id={backName}
          value={value}
          fullWidth
          onChange={handleStepValue}
        />
      </DivStyled>
      <Grid
        container
        justify={error ? 'space-between' : 'flex-end'}
        alignContent="center"
      >
        {error && (
          <Typography variant="body2" component="div" color="error" bold>
            {error.message}
          </Typography>
        )}
        <Button color="primary" onClick={onClickNext}>
          {isLast ? 'Finalizar' : 'Siguiente'}
        </Button>
      </Grid>
      {children}
    </>
  );
};

export default FormRecolector;
