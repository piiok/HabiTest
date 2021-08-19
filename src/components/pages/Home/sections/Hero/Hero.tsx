import { Typography, Button, Grid, Container, Link } from '@/components/atoms';
import { Section, GridStyled, Item } from './Hero.styled';

const Hero = () => {
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
            <Link href="/form">
              <Button color="primary">Vender</Button>
            </Link>
          </Item>
        </GridStyled>
      </Container>
    </Section>
  );
};

export default Hero;
