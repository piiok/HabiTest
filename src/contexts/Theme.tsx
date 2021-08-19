import { FC, useState, createContext, useContext } from 'react';
import { ThemeProvider as ThemeProviderSC } from 'styled-components';
import themeDefault from '@/styles/theme';
import Global from '@/styles/Global';

const ThemeContext = createContext({ theme: themeDefault });
const useTheme = () => {
  const themeAll = useContext(ThemeContext);
  return themeAll;
};

export const ThemeProvider: FC = ({ children }) => {
  const [theme] = useState(themeDefault);

  return (
    <ThemeContext.Provider value={{ theme }}>
      <Global />
      <ThemeProviderSC theme={theme}>{children}</ThemeProviderSC>
    </ThemeContext.Provider>
  );
};

export default useTheme;
