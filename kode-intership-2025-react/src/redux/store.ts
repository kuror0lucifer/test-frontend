import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/slice';
import activeTabReducer from './activeTab/slice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const activeTabPersistConfig = {
  key: 'activeTab',
  storage,
};

const persistedActiveTabReducer = persistReducer(
  activeTabPersistConfig,
  activeTabReducer
);

export const store = configureStore({
  reducer: {
    users: usersReducer,
    activeTab: persistedActiveTabReducer,
  },
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
