import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import UsersState from './types.type';
import User from '../../types/user.type';

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsersData: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      state.filteredUsers = action.payload;
    },
    setFilteredUsers: (state, action: PayloadAction<User[]>) => {
      state.filteredUsers = action.payload;
    },
  },
});

export const { setUsersData, setFilteredUsers } = usersSlice.actions;
export default usersSlice.reducer;
