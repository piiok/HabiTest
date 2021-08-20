import breakpoints from '@/styles/theme/breakpoints';

export type Breakpoint = keyof typeof breakpoints.values;
export type Up = Required<Record<Breakpoint, boolean>>;

export const initialUp: Up = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
};

export const breakpointsReverse: Breakpoint[] = ['xl', 'lg', 'md', 'sm', 'xs'];
export type useMediaQueryReturn = {
  currentBreakpoint: Breakpoint | undefined;
  up: Up;
};
