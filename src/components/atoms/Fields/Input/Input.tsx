import { forwardRef } from 'react';
import { FieldseStyled } from './Input.styles';

type Props = {
  label?: string;
  id: string;
  fullWidth?: boolean;
} & React.HTMLProps<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, fullWidth, id, ...others } = props;
  return (
    <FieldseStyled fullWidth={fullWidth}>
      <input type="input" id={id} ref={ref} {...others} />
      <label htmlFor={id} className="form__label">
        {label}
      </label>
    </FieldseStyled>
  );
});

export default Input;
