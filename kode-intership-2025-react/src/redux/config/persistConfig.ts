import storage from 'redux-persist/lib/storage';

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

export { usersPersistConfig, activeTabPersistConfig, sortingPersistConfig };
