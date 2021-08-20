import styled from 'styled-components';
import { Grid } from '@/components/atoms';

export const MainStyled = styled.main`
  --padding-top: 50px;
  background-image: url(/images/offices/office-1.jpg);
  background-size: auto 100%;
  background-position: center;
  min-height: calc(100vh - var(--padding-top));
  padding-top: var(--padding-top);
  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    --padding-top: 20px;
    background-size: 100% auto;
  }
`;

export const ContainerStyled = styled.div`
  max-width: 100vw;
  padding-left: 20px;
  padding-left: 20px;
`;
