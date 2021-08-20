import styled from 'styled-components';

type props = {
  fullWidth?: boolean;
};
export const FieldseStyled = styled.div<props>`
  input[type='input'] {
    padding: 12px 20px;
    color: ${({ theme }) => theme.palette.primary.dark};
    font-weight: 600;
    font-size: 1rem;
    border-width: 2px;
    border-style: solid;
    border-color: ${({ theme }) => theme.palette.primary.main};
    outline: transparent;
    ${({ fullWidth }) =>
      fullWidth
        ? `
            width: -moz-available;
            width: -webkit-fill-available;
          `
        : 'width:auto;'}
    transition: all calc(var(--transition, 0.2) * 1s) ease;
    &:active,
    &:focus {
      box-shadow: 0 2px 2px 0 ${({ theme }) => theme.palette.primary.dark};
    }
  }
`;
