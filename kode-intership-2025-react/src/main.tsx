import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { AppRoutes } from './routes/routes.tsx';
import { store } from './redux/store.ts';
import GlobalStyle from './assets/styles/globalStyles.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './config/languages';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
