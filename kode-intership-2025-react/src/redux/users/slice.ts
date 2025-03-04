import { createSlice } from '@reduxjs/toolkit';
import UsersState from './types.type';

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsersData: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUsersData } = usersSlice.actions;
export default usersSlice.reducer;
