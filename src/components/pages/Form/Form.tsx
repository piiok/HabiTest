import { Container, Paper } from '@/components/atoms';
import { MainStyled } from './Form.styles';
import FormRecolector from './FormRecolector';

const Form = () => {
  return (
    <MainStyled>
      <Container>
        <Paper>
          <FormRecolector />
        </Paper>
      </Container>
    </MainStyled>
  );
};

export default Form;
