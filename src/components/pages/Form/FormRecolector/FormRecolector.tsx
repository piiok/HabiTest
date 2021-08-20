import { useCallback } from 'react';
import Input from '@/components/atoms/Fields/Input';
import Grid from '@/components/atoms/Grid';
import Typography from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';

import { useSelector, useDispatch } from '@/hooks/redux';
import { update, nextStep } from '@/redux/reducers/form/action';

import { DivStyled } from './FormRecolector.styles';

const FormRecolector = () => {
  const dispatch = useDispatch();
  const {
    step: { title, description, backName },
    error,
    value,
    isLast,
  } = useSelector((store) => store.form.currentStep);

  const handleStepValue = useCallback(
    ({ target: { value } }: { target: { value: string } }) =>
      dispatch(update(value)),
    [],
  );

  const onClickNext = () => (isLast ? dispatch(nextStep()) : null);

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
      <Typography
        variant="body1"
        component="p"
        color="gray"
        bold
        style={{ marginTop: '20px' }}
      >
        {description}
      </Typography>
      <DivStyled>
        <Input
          id={backName}
          defaultValue={value}
          fullWidth
          onBlur={handleStepValue}
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
    </>
  );
};

export default FormRecolector;
