import { FC, useEffect, useMemo } from 'react';
import { ContentWrapper } from './MainContent.styles';
import { ContentSkeleton } from '../ContentSkeleton';
import { useQuery } from '@tanstack/react-query';
import { fetchAllUsers } from '../../api/service';
import User from '../../types/user.type';
import { UserCard } from '../UserCard';
import { EmptySearchContent } from '../EmptySearchContent';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersData } from '../../redux/users/slice';
import { Error } from '../Error';
import { selectActiveTab } from '../../redux/activeTab/selectors';
import { selectAllFilteredUsers } from '../../redux/users/selectors';
import { selectCurrentSorting } from '../../redux/sorting/selectors';
import sortByBirthday from '../../utils/sortByBirthday';
import { BirthdaySeparator } from '../BirthdaySeparator';

export const MainContent: FC = () => {
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
      result = result.filter((user: User) => user.department === activeTab);
    }

    if (currentSorting === 'alphabet') {
      result.sort((a, b) => a.lastName.localeCompare(b.lastName));
    } else if (currentSorting === 'birthday') {
      result = sortByBirthday(result);
    }

    return result;
  }, [users, activeTab, currentSorting]);

  const isBirthdaySorting = Array.isArray(filteredUsers);

  return (
    <ContentWrapper>
      {isLoading || isFetching ? (
        Array.from({
          length: isBirthdaySorting ? filteredUsers?.length : 10,
        }).map((_, index) => <ContentSkeleton key={index} />)
      ) : error ? (
        <Error onRetry={refetch} />
      ) : isBirthdaySorting && filteredUsers?.length === 0 ? (
        <EmptySearchContent />
      ) : currentSorting === 'alphabet' && isBirthdaySorting ? (
        (filteredUsers || []).map((user: User) => (
          <UserCard
            key={user.id}
            id={user.id}
            avatar={user.avatarUrl}
            department={user.department}
            name={`${user.firstName} ${user.lastName}`}
            nickName={user.userTag.toLowerCase()}
          />
        ))
      ) : currentSorting === 'birthday' && !isBirthdaySorting ? (
        <>
          {filteredUsers?.birthdayThisYear?.map((user: User) => (
            <UserCard
              key={user.id}
              id={user.id}
              avatar={user.avatarUrl}
              department={user.department}
              name={`${user.firstName} ${user.lastName}`}
              nickName={user.userTag.toLowerCase()}
            />
          ))}
          <BirthdaySeparator />
          {filteredUsers?.birthdayNextYear?.map((user: User) => (
            <UserCard
              key={user.id}
              id={user.id}
              avatar={user.avatarUrl}
              department={user.department}
              name={`${user.firstName} ${user.lastName}`}
              nickName={user.userTag.toLowerCase()}
            />
          ))}
        </>
      ) : (
        ''
      )}
    </ContentWrapper>
  );
};
