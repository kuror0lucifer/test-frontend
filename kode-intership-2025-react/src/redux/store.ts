import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/slice';
import activeTabReducer from './activeTab/slice';
import sortingReducer from './sorting/slice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const usersPersistConfig = {
  key: 'users',
  storage,
};

const activeTabPersistConfig = {
  key: 'activeTab',
  storage,
};

const sortingPersistConfig = {
  key: 'sorting',
  storage,
};

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
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
