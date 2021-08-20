import { FC, ButtonHTMLAttributes } from 'react';

import useTheme from '@/contexts/Theme';
import Typography from '@/components/atoms/Typography';
import ButtonStyled from './Button.styles';

type props = {
  color?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<props> = ({ children, color, ...others }) => {
  const { theme } = useTheme();

  return (
    <ButtonStyled color={color} {...others}>
      <Typography
        color={color ? theme.palette[color].textContrast : 'primary'}
        variant="button"
        component="div"
      >
        {children}
      </Typography>
    </ButtonStyled>
  );
};

export default Button;
