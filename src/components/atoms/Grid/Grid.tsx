import { FC } from 'react';
import { withTheme } from 'styled-components';
import type { GridRootProp } from './Grid.styles';
import GridRoot from './Grid.styles';

export type GridProps = Partial<GridRootProp> &
  React.HTMLAttributes<HTMLDivElement> & { theme: any };

const Grid: FC<GridProps> = ({
  theme,
  alignContent = 'stretch',
  alignItems = 'stretch',
  container = false,
  direction = 'row',
  item = false,
  justify = 'flex-start',
  lg = false,
  md = false,
  sm = false,
  spacing = 0,
  wrap = 'wrap',
  xl = false,
  xs = false,
  ...other
}) => {
  const props = {
    theme,
    alignContent,
    alignItems,
    container,
    direction,
    item,
    justify,
    lg,
    md,
    sm,
    spacing,
    wrap,
    xl,
    xs,
    ...other,
  };

  return <GridRoot {...props} />;
};

export default withTheme(Grid);
