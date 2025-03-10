import { createSlice } from '@reduxjs/toolkit';
import SortingState from './types.type';

const initialState: SortingState = {
  sorting: 'alphabet',
};

const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSorting: (state, action) => {
      state.sorting = action.payload;
    },
  },
});

export const { setSorting } = sortingSlice.actions;
export default sortingSlice.reducer;
