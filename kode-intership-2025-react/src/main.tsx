import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { AppRoutes } from './routes/routes.tsx';
import { store } from './redux/store.ts';
import GlobalStyle from './assets/styles/globalStyles.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </StrictMode>
);
