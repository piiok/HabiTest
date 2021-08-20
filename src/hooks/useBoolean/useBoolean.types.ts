export type useBooleanReturn = {
  value: boolean;
  to: (newValue: boolean) => void;
  toTrue: () => void;
  toFalse: () => void;
  toggle: () => void;
};

export type useBooleanParams = {
  initialValue?: boolean;
};
