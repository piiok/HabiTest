import { FC, useMemo, useRef } from 'react';

import useTheme from '@/contexts/Theme';
import Paragraph from './Typography.styles';
import { fontVariant } from './Typography.const';
import type { variantType, AlignType } from './Typography.const';

type colorType =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'black'
  | 'inherit';

export declare type TypographyProps = {
  component?: React.ElementType;
  bold?: boolean;
  color?: colorType | string;
  variant?: variantType;
  align?: AlignType;
} & React.HTMLAttributes<HTMLElement>;

const Typography: FC<TypographyProps> = ({
  bold = false,
  color = 'black',
  component = 'div',
  variant = 'body1',
  style: defaultStyle = {},
  align = 'left',
  ...props
}: TypographyProps) => {
  const { theme } = useTheme();

  const colorDefinition = useRef({
    white: theme.common.white,
    black: theme.common.black,
    inherit: 'inherit',
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    error: theme.palette.error.main,
    warning: theme.palette.warning.main,
    info: theme.palette.info.main,
    success: theme.palette.success.main,
  });

  const colorApply = useMemo<string>(() => {
    if (color in colorDefinition.current) {
      return colorDefinition.current[
        color as keyof typeof colorDefinition.current
      ];
    }
    return color;
  }, [color, colorDefinition]);

  const style = useMemo(
    () => ({
      '--color': colorApply,
      ...fontVariant[variant],
      '--bold': bold ? '700' : fontVariant[variant]['--bold'],
      ...defaultStyle,
      textAlign: align,
    }),
    [colorApply, variant, bold, defaultStyle, fontVariant],
  );

  const newProps = {
    ...props,
    theme,
    style,
    as: component,
  };

  return <Paragraph {...newProps} />;
};

export default Typography;
