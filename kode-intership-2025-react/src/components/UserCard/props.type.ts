import { DepartmentsKeys } from '../../types/departments';

export interface UserCardProps {
  id: string;
  avatar: string;
  name: string;
  nickName: string;
  department: DepartmentsKeys;
}
