import { createSlice } from '@reduxjs/toolkit';
import ActiveTabState from './types.type';

const initialState: ActiveTabState = {
  tab: 'all',
};

const activeTabSlice = createSlice({
  name: 'activeTab',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});

export const { setActiveTab } = activeTabSlice.actions;
export default activeTabSlice.reducer;
