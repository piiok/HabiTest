import styled from 'styled-components';

export const MainStyled = styled.main`
  --padding-top: 50px;
  background-image: url(/images/offices/office-1.jpg);
  background-size: auto 100%;
  background-position: center;
  min-height: calc(100vh - var(--padding-top));
  padding-top: var(--padding-top);
  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    --padding-top: 100px;
    background-size: 100% auto;
  }
`;
