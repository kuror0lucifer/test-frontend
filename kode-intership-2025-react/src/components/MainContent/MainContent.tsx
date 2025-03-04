import { FC, useEffect } from 'react';
import { ContentWrapper } from './MainContent.styles';
import { ContentSkeleton } from '../ContentSkeleton';
import { useQuery } from '@tanstack/react-query';
import { fetchUsersByDepartment } from '../../api/service';
import User from '../../types/user.type';
import { UserCard } from '../UserCard';
import blankAvatar from '../../constants/blankAvatar';
import { EmptySearchContent } from '../EmptySearchContent';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersData } from '../../redux/users/slice';
import { Error } from '../Error';
import { selectActiveTab } from '../../redux/activeTab/selectors';

export const MainContent: FC = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);
  const { data, error, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['users', activeTab],
    queryFn: () => fetchUsersByDepartment(activeTab),
  });

  useEffect(() => {
    if (data) {
      dispatch(setUsersData(data));
    }
  }, [data, dispatch]);

  return (
    <ContentWrapper>
      {isLoading || isFetching ? (
        Array.from({ length: data?.length || 10 }).map((_, index) => (
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
