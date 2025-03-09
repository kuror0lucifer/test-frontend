import axios from 'axios';
import API_BASE_URL from '../constants/apiBaseUrl';

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchUsers = async (
  params?: Record<string, string | boolean | number>
) => {
  try {
    const { data } = await apiService.get('', { params });
    return data.items;
  } catch (err) {
    if (err instanceof Error) {
      throw err.message;
    }
  }
};

export const fetchAllUsers = () => fetchUsers({ __example: 'all' });

export const fetchUsersByDepartment = (department: string) =>
  fetchUsers({ __example: department });

export const fetchDynamicUsers = () => fetchUsers({ __dynamic: true });

export const fetchUsersError = () =>
  fetchUsers({ __code: 500, __dynamic: true });
