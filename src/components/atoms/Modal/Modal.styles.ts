import styled from 'styled-components';
import Grid from '@/components/atoms/Grid';

type ModalContainerProps = {
  visible: boolean;
};
export const ModalContainer = styled.div<ModalContainerProps>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  position: fixed;
  top: 0;
  left: 0;
  background: #00000066;
  height: 100vh;
  max-height: 100vh;
  overflow: scroll;
  width: 100vw;
  transition: all calc(var(--transition, 0.2) * 1s) ease;
`;

export const GridStyled = styled(Grid)`
  min-height: 100vh;
`;
