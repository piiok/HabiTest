import styled from 'styled-components';

export const MainStyled = styled.main`
  min-height: 100vh;
  background-image: url(/images/offices/office-1.jpg);
  background-size: auto 100%;
  background-position: center;
  padding-top: 50px;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    background-size: 100% auto;
    padding-top: 100px;
  }
`;
