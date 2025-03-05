import { RootState } from '../store';

export const selectAllUsers = (state: RootState) => state.users.users;

export const selectAllFilteredUsers = (state: RootState) =>
  state.users.filteredUsers;

export const selectUserById =
  (userId: string | undefined) => (state: RootState) =>
    userId ? state.users.users.find(user => user.id === userId) ?? null : null;

export const selectUserBirthday = (state: RootState, userId: string) =>
  state.users.users.find(user => user.id === userId)?.birthday ?? '';

export const selectUserPhone = (state: RootState, userId: string) =>
  state.users.users.find(user => user.id === userId)?.phone ?? '';

export const selectUserName = (state: RootState, userId: string) => {
  const user = state.users.users.find(user => user.id === userId);
  return user ? `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim() : '';
};

export const selectUserDepartment = (state: RootState, userId: string) =>
  state.users.users.find(user => user.id === userId)?.department ?? '';

export const selectUserNickName = (state: RootState, userId: string) =>
  state.users.users.find(user => user.id === userId)?.userTag ?? '';

export const selectUserAvatar = (state: RootState, userId: string) =>
  state.users.users.find(user => user.id === userId)?.avatarUrl ?? '';
