import { DepartmentsKeys } from '../../types/departments';

export interface ProfileHeaderProps {
  fullName: string;
  avatar: string;
  department: DepartmentsKeys;
  nickName: string;
}
