import { DepartmentsKeys } from '../../../types/departments.type';

export interface ProfileHeaderProps {
  fullName: string;
  avatar: string;
  department: DepartmentsKeys;
  nickName: string;
}
