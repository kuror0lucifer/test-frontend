import { DepartmentsKeys } from '../../../types/departments.type';

export interface UserCardProps {
  id: string;
  avatar: string;
  name: string;
  nickName: string;
  department: DepartmentsKeys;
}
