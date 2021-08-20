import { useCallback } from 'react';
import { useRouter } from 'next/router';

import Button from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Grid from '@/components/atoms/Grid';
import Paper from '@/components/atoms/Paper';
import Typography from '@/components/atoms/Typography';
import Link from '@/components/atoms/Link';
import { useDispatch, useSelector } from '@/hooks/redux';
import { restart } from '@/redux/reducers/form/action';
import { MainStyled } from './MiniComponents.styles';

const Form = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { path } = useSelector((store) => store.form.currentStep.step);
  const handleReset = useCallback(() => {
    dispatch(restart());
    router.push(`/form/${path}`);
  }, []);
  return (
    <MainStyled>
      <Container>
        <Paper>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="h1"
                color="gray"
                align="center"
              >
                ¡Nos pondremos en contacto contigo!
              </Typography>
            </Grid>
            <Grid item container xs={12} justify="center">
              <Button onClick={handleReset}>Rehacer la encuesta</Button>
            </Grid>
            <Link href="/">
              <Button color="primary">Inicio</Button>
            </Link>
          </Grid>
        </Paper>
      </Container>
    </MainStyled>
  );
};

export default Form;
