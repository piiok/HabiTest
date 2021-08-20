import { Container, Paper, Grid, Modal, Button } from '@/components/atoms';
import { MainStyled, ContainerStyled } from './MiniComponents.styles';
import useMediaQuery from '@/hooks/useMediaQuery';
import useBoolean from '@/hooks/useBoolean';
import Resume from './Resume';
import FormRecolector from './FormRecolector';

const Form = () => {
  const { up } = useMediaQuery();
  const {
    toTrue: toOpen,
    toFalse: toClose,
    value: open,
  } = useBoolean({ initialValue: false });

  return (
    <MainStyled>
      {up.md ? (
        <ContainerStyled>
          <Grid container spacing={2}>
            <Grid item md={8} xl={9}>
              <Paper>
                <FormRecolector />
              </Paper>
            </Grid>
            <Grid item md={4} xl={3}>
              <Paper>
                <Resume />
              </Paper>
            </Grid>
          </Grid>
        </ContainerStyled>
      ) : (
        <>
          <Container>
            <Paper>
              <FormRecolector>
                <Grid container justify="center" alignItems="flex-end">
                  <Button onClick={toOpen}>Ver resumen</Button>
                </Grid>
              </FormRecolector>
            </Paper>
          </Container>
          <Modal open={open} onClose={toClose}>
            <Resume />
          </Modal>
        </>
      )}
    </MainStyled>
  );
};

export default Form;
