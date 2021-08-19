import styled from 'styled-components';

type props = {
  color: 'primary' | 'secondary';
};

const ButtonStyled = styled.button<props>`
  background: ${({ theme, color }) => theme.palette[color].main};
  /* border-radius: 4px; */
  border: none;
  padding: 8px 20px;
  &:hover {
    background: ${({ theme, color }) => theme.palette[color].dark};
  }
  &:active {
    background: ${({ theme, color }) => theme.palette[color].light};
  }
`;

export default ButtonStyled;
