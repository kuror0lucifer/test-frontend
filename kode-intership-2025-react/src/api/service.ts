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
