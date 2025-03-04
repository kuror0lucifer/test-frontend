import { FC } from 'react';
import { ContentWrapper } from './MainContent.styles';
import { ContentSkeleton } from '../ContentSkeleton';
import { useQuery } from '@tanstack/react-query';
import { fetchAllUsers } from '../../api/service';
import User from '../../types/user.type';
import { UserCard } from '../UserCard';

export const MainContent: FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['all'],
    queryFn: fetchAllUsers,
  });

  const blankAvatar = '/goose.png';

  return (
    <ContentWrapper>
      {isLoading
        ? Array.from({ length: 20 }).map((_, index) => (
            <ContentSkeleton key={index} />
          ))
        : data.map((user: User) => (
            <UserCard
              key={user.id}
              avatar={blankAvatar}
              department={user.department}
              name={`${user.firstName} ${user.lastName}`}
              nickName={user.nickName}
            />
          ))}
    </ContentWrapper>
  );
};
