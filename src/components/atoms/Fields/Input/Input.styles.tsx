import styled from 'styled-components';

type props = {
  fullWidth?: boolean;
};
export const FieldseStyled = styled.div<props>`
  input[type='input'] {
    padding: 12px 20px;
    font-size: 1rem;
    border-width: 2px;
    border-style: solid;
    border-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: calc(var(--border-radius) * 1px);
    text-align: center;
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
      border-width: 4px;
    }
  }
`;
