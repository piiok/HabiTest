import styled from 'styled-components';

type props = {
  color?: 'primary' | 'secondary';
};

const ButtonStyled = styled.button<props>`
  background: ${({ theme, color }) =>
    color ? theme.palette[color].main : 'transparent'};
  /* border-radius: 4px; */
  border: none;
  padding: 8px 20px;
  &:hover {
    background: ${({ theme, color }) =>
      color ? theme.palette[color].dark : 'lightGray'};
  }
  &:active {
    background: ${({ theme, color }) =>
      color ? theme.palette[color].light : 'lightGray'};
  }
`;

export default ButtonStyled;
