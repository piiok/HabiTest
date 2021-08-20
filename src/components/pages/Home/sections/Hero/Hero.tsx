import { Typography, Button, Grid, Container, Link } from '@/components/atoms';
import { Section, GridStyled, Item } from './Hero.styled';
import useSelector from '@/hooks/redux/useSelector';

const Hero = () => {
  const { path } = useSelector((store) => store.form.currentStep.step);

  return (
    <Section>
      <Container>
        <GridStyled
          container
          alignItems="center"
          justify="center"
          alignContent="center"
        >
          <Item
            container
            item
            alignItems="center"
            justify="center"
            xl={6}
            lg={10}
            md={10}
            sm={12}
            xs={11}
          >
            <Grid item xs={12}>
              <Typography
                color="white"
                variant="h3"
                component="h1"
                align="center"
              >
                ¡Vende tu apartamento!
              </Typography>
            </Grid>
            <Link href={`/form/${path}`}>
              <Button color="primary">Vender</Button>
            </Link>
          </Item>
        </GridStyled>
      </Container>
    </Section>
  );
};

export default Hero;
