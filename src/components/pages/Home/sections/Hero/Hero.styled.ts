import styled from 'styled-components';

import Grid from '@/components/atoms/Grid';

export const Section = styled.section`
  height: 100vh;
  background-image: url(/images/apartaments/apartament-2.jpg);
  background-size: auto 100%;
  background-position: center;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    background-size: 100% auto;
  }
`;

export const GridStyled = styled(Grid)`
  height: 100%;
`;

export const Item = styled(Grid)`
  min-height: 200px;
  padding: 20px 10px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgb(0 0 0 / 37%);
  -webkit-backdrop-filter: blur(15.5px);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(15.5px);
  border: solid 6px white;
`;
