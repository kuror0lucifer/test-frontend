import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectAllUsers } from '../redux/users/selectors';
import { setFilteredUsers } from '../redux/users/slice';

export const useSearch = (searchValue: string) => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryFromUrl = searchParams.get('query') || '';

  const filteredUsers = useCallback(() => {
    if (!searchValue) return users;
    return users.filter(
      user =>
        user.firstName.toLowerCase().includes(searchValue) ||
        user.lastName.toLowerCase().includes(searchValue) ||
        user.userTag.toLowerCase().includes(searchValue)
    );
  }, [users, searchValue]);

  const handleSearch = useCallback(() => {
    if (searchValue) {
      setSearchParams({ query: searchValue });
    } else {
      setSearchParams({});
    }
    dispatch(setFilteredUsers(filteredUsers()));
  }, [searchValue, setSearchParams, dispatch, filteredUsers]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchValue, handleSearch]);

  return {
    queryFromUrl,
  };
};
