import { RootState } from '../store';

export const selectCurrentSorting = (state: RootState) => state.sorting.sorting;
