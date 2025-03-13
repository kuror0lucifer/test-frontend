import { DepartmentsKeys } from './departments.type';

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
