import { useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveTab } from '../redux/activeTab/selectors';
import { selectAllFilteredUsers } from '../redux/users/selectors';
import { selectCurrentSorting } from '../redux/sorting/selectors';
import { fetchAllUsers } from '../api/service';
import { setUsersData } from '../redux/users/slice';
import sortByBirthday from '../utils/sortByBirthday';
import User from '../types/user.type';

export const useUsersData = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);
  const users = useSelector(selectAllFilteredUsers);
  const currentSorting = useSelector(selectCurrentSorting);

  const { data, error, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['users'],
    queryFn: fetchAllUsers,
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (data) {
      dispatch(setUsersData(data));
    }
  }, [data, dispatch]);

  const filteredUsers = useMemo(() => {
    if (!users || !Array.isArray(users)) return [];

    let result:
      | User[]
      | {
          birthdayThisYear: User[];
          birthdayNextYear: User[];
        } = [...users];

    if (activeTab !== 'all') {
      result = result.filter(user => user.department === activeTab);
    }

    if (currentSorting === 'alphabet') {
      result.sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else if (currentSorting === 'birthday') {
      result = sortByBirthday(result);
    }

    return result;
  }, [users, activeTab, currentSorting]);

  return {
    filteredUsers,
    error,
    isLoading,
    isFetching,
    refetch,
    currentSorting,
  };
};
