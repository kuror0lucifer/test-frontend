import { RootState } from '../store';

export const selectAllUsers = (state: RootState) => state.users.users;

export const selectAllFilteredUsers = (state: RootState) =>
  state.users.filteredUsers;

export const selectUserById =
  (userId: string | undefined) => (state: RootState) =>
    userId ? state.users.users.find(user => user.id === userId) ?? null : null;
