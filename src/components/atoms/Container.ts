import styled from 'styled-components';

const Container = styled.div`
  width: 96%;
  height: 100%;
  margin-left: 2%;
  margin-right: 2%;
  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 800px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.values.lg}px) {
    width: 1000px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.values.xl}px) {
    width: 1600px;
  }
`;

export default Container;
