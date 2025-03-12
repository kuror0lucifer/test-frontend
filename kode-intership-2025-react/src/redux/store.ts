import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/slice';
import activeTabReducer from './activeTab/slice';
import sortingReducer from './sorting/slice';
import { persistStore, persistReducer } from 'redux-persist';
import {
  usersPersistConfig,
  activeTabPersistConfig,
  sortingPersistConfig,
} from './config/persistConfig';

const persistedUsersReducer = persistReducer(usersPersistConfig, usersReducer);
const persistedActiveTabReducer = persistReducer(
  activeTabPersistConfig,
  activeTabReducer
);
const persistedSortingReducer = persistReducer(
  sortingPersistConfig,
  sortingReducer
);

export const store = configureStore({
  reducer: {
    users: persistedUsersReducer,
    activeTab: persistedActiveTabReducer,
    sorting: persistedSortingReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
