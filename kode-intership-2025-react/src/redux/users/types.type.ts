import User from '../../types/user.type';

interface UsersState {
  users: User[];
  filteredUsers: User[];
}

export default UsersState;
