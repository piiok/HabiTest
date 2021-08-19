import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@/contexts/Theme';
import { store } from '@/redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
