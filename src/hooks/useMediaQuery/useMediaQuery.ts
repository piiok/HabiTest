import { useState, useCallback, useEffect } from 'react';
import breakpoints from '@/styles/theme/breakpoints';
import {
  useMediaQueryReturn,
  Breakpoint,
  initialUp,
  breakpointsReverse,
  Up,
} from './useMediaQuery.types';

const useMediaQuery: () => useMediaQueryReturn = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<
    Breakpoint | undefined
  >();
  const [up, setUp] = useState<Up>(initialUp);

  const handleBreakpoint = useCallback(() => {
    const { innerWidth: width } = window;
    let currBreakpoint: Breakpoint | undefined;
    breakpointsReverse.forEach((breakpoint) => {
      if (width >= breakpoints.values[breakpoint]) {
        currBreakpoint = breakpoint;
        setUp((up) => ({ ...up, [breakpoint]: true }));
      } else {
        setUp((up) => ({ ...up, [breakpoint]: false }));
      }
    });
    setCurrentBreakpoint(currBreakpoint);
  }, []);

  useEffect(() => {
    handleBreakpoint();
    window.addEventListener('resize', handleBreakpoint);
    return () => window.removeEventListener('resize', handleBreakpoint);
  }, []);

  return {
    currentBreakpoint,
    up,
  };
};

export default useMediaQuery;
