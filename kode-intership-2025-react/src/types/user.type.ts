import { DepartmentsKeys } from './departments';

interface User {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  nickName: string;
  department: DepartmentsKeys;
  position: string;
  birthday: string;
  phone: string;
}

export default User;
