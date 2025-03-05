import { DepartmentsKeys } from './departments';

interface User {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userTag: string;
  department: DepartmentsKeys;
  position: string;
  birthday: string;
  phone: string;
}

export default User;
