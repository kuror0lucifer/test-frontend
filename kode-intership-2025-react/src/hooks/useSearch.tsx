import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectAllUsers } from '../redux/users/selectors';
import { setFilteredUsers } from '../redux/users/slice';

export const useSearch = (searchValue: string) => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryFromUrl = searchParams.get('query') || '';

  const [debouncedSearchValue, setDebouncedSearchValue] =
    useState<string>(searchValue);

  useEffect(() => {
    const searchValueDebounce = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 500);

    return () => clearTimeout(searchValueDebounce);
  }, [searchValue]);

  const filteredUsers = useCallback(() => {
    if (!debouncedSearchValue) return users;
    return users.filter(user => {
      const firstNameMatch = user.firstName
        .toLowerCase()
        .includes(debouncedSearchValue);
      const lastNameMatch = user.lastName
        .toLowerCase()
        .includes(debouncedSearchValue);
      const userTagMatch = user.userTag
        .toLowerCase()
        .includes(debouncedSearchValue);
      const fullNameMatch = `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(debouncedSearchValue);

      return firstNameMatch || lastNameMatch || fullNameMatch || userTagMatch;
    });
  }, [users, debouncedSearchValue]);

  const handleSearch = useCallback(() => {
    if (debouncedSearchValue) {
      setSearchParams({ query: debouncedSearchValue });
    } else {
      setSearchParams({});
    }
    dispatch(setFilteredUsers(filteredUsers()));
  }, [debouncedSearchValue, setSearchParams, dispatch, filteredUsers]);

  useEffect(() => {
    handleSearch();
  }, [debouncedSearchValue, handleSearch]);

  return {
    queryFromUrl,
  };
};
