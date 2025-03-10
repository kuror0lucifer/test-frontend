import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/globalStyles';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AppRoutes } from './routes/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import themes from './constants/themes';
import { useTheme } from './hooks';

const App = () => {
  const queryClient = new QueryClient();
  const { theme } = useTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle />
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
