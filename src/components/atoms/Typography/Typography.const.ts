export type AlignType = 'center' | 'left' | 'right' | 'justify';

export const fontVariant = {
  h1: {
    fontSize: '6rem',
    '--bold': 'light',
  },
  h2: {
    fontSize: '3.75rem',
    '--bold': 'light',
  },
  h3: {
    fontSize: '3rem',
    '--bold': 'normal',
  },
  h4: {
    fontSize: '3rem',
    '--bold': 'normal',
  },
  h5: {
    fontSize: '1.5rem',
    '--bold': 'normal',
  },
  h6: {
    fontSize: '1.25rem',
    '--bold': '600',
  },
  subtitle1: {
    fontSize: '1rem',
    '--bold': 'normal',
  },
  subtitle2: {
    fontSize: '1rem',
    '--bold': '600',
  },
  body1: {
    fontSize: '1rem',
    '--bold': 'normal',
  },
  body2: {
    fontSize: '0.875rem',
    '--bold': 'normal',
  },
  button: {
    fontSize: '0.875rem',
    '--bold': '600',
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: '0.75rem',
    '--bold': 'normal',
  },
  overline: {
    fontSize: '0.625rem',
    '--bold': 'normal',
    textTransform: 'uppercase',
  },
};

export type variantType = keyof typeof fontVariant;

type variantMappingType = {
  [idx in variantType]: string;
};

export const variantMapping: variantMappingType = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'subtitle1',
  subtitle2: 'subtitle2',
  body1: 'body1',
  body2: 'body2',
  button: 'button',
  caption: 'caption',
  overline: 'overline',
};
