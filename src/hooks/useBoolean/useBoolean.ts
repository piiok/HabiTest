import { useState, useCallback } from 'react';

import { useBooleanParams, useBooleanReturn } from './useBoolean.types';

const useBoolean: (params: useBooleanParams) => useBooleanReturn = ({
  initialValue,
}) => {
  const defaultValue = initialValue || false;
  const [value, setValue] = useState<boolean>(defaultValue);

  const to = useCallback((newValue: boolean) => {
    setValue(newValue);
  }, []);

  const toFalse = useCallback(() => {
    setValue(false);
  }, []);

  const toTrue = useCallback(() => {
    setValue(true);
  }, []);

  const toggle = useCallback(() => {
    setValue((_value) => !_value);
  }, []);

  return {
    value,
    to,
    toFalse,
    toTrue,
    toggle,
  };
};

export default useBoolean;
