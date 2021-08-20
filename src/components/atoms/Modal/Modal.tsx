import { FC, useCallback, useEffect } from 'react';
import Button from '@/components/atoms/Button';
import Grid from '@/components/atoms/Grid';
import Paper from '@/components/atoms/Paper';
import useBoolean from '@/hooks/useBoolean';
import { ModalContainer, GridStyled } from './Modal.styles';

type ModalProps = {
  open: boolean;
  onClose: () => void;
};
const Modal: FC<ModalProps> = ({
  open: openProp,
  onClose: onCloseProps,
  children,
}) => {
  const {
    value: open,
    toFalse: toClose,
    to: setOpen,
  } = useBoolean({ initialValue: openProp });

  const handleClose = useCallback(() => {
    onCloseProps();
    toClose();
  }, []);

  useEffect(() => {
    setOpen(openProp);
  }, [openProp]);
  return (
    (open && (
      <ModalContainer visible={open}>
        <GridStyled container justify="center" alignItems="center">
          <Grid item xs={11} sm={8} md={6} lg={6} xl={6}>
            <Paper>
              {children}
              <Grid container justify="flex-end">
                <Button color="primary" onClick={handleClose}>
                  Cerrar
                </Button>
              </Grid>
            </Paper>
          </Grid>
        </GridStyled>
      </ModalContainer>
    )) ||
    null
  );
};

export default Modal;
