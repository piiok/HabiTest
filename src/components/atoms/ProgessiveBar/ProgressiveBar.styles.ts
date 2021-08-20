import styled from 'styled-components';

type BarProps = {
  percent: number;
};
export const Bar = styled.div<BarProps>`
  position: relative;
  --height: 5px;
  width: 100%;
  height: var(--height);
  background-color: lightGray;
  &:after {
    background-color: ${({ theme }) => theme.palette.primary.light};
    content: '';
    height: var(--height);
    position: absolute;
    left: 0;
    top: 0;
    width: ${({ percent }) => percent * 100}%;
    transition: all calc(var(--transition, 0.2) * 1s) ease;
  }
`;
export const RootStyled = styled.div``;

export default RootStyled;
