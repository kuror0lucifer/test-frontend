import axios from 'axios';
import API_BASE_URL from '../constants/apiBaseUrl';

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchAllUsers = async () => {
  try {
    const { data } = await apiService.get('?__example=all');

    return data;
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    }
  }
};

export const fetchUsersByDepartment = async (department: string) => {
  try {
    const { data } = await apiService.get(`?__expample=${department}`);

    return data;
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    }
  }
};

export const fetchDynamicUsers = async () => {
  try {
    const { data } = await apiService.get('?__dynamic=true');

    return data;
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    }
  }
};

export const fatchUsersError = async () => {
  try {
    const { data } = await apiService.get('?__code=500&__dynamic=true');

    return data;
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    }
  }
};
