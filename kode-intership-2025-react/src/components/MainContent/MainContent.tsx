import { FC, useEffect } from 'react';
import { ContentWrapper } from './MainContent.styles';
import { ContentSkeleton } from '../ContentSkeleton';
import { useQuery } from '@tanstack/react-query';
import { fetchAllUsers } from '../../api/service';
import User from '../../types/user.type';
import { UserCard } from '../UserCard';
import blankAvatar from '../../constants/blankAvatar';
import { EmptySearchContent } from '../EmptySearchContent';
import { useDispatch } from 'react-redux';
import { setUsersData } from '../../redux/users/slice';
import { Error } from '../Error';

export const MainContent: FC = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['error'],
    queryFn: fetchAllUsers,
  });

  useEffect(() => {
    if (data) {
      dispatch(setUsersData(data));
    }
  }, [data, dispatch]);

  return (
    <ContentWrapper>
      {isLoading || isFetching ? (
        Array.from({ length: 20 }).map((_, index) => (
          <ContentSkeleton key={index} />
        ))
      ) : error ? (
        <Error onRetry={refetch} />
      ) : data?.length === 0 ? (
        <EmptySearchContent />
      ) : (
        data?.map((user: User) => (
          <UserCard
            key={user.id}
            avatar={blankAvatar}
            department={user.department}
            name={`${user.firstName} ${user.lastName}`}
            nickName={user.nickName}
          />
        ))
      )}
    </ContentWrapper>
  );
};
