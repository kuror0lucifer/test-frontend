import { FC } from 'react';
import { ContentWrapper } from './MainContent.styles';
import { useUsersData } from '../../../hooks';
import User from '../../../types/user.type';
import { UserCard } from '../../ui/UserCard';
import { ContentSkeleton } from '../../shared/ContentSkeleton';
import { Error } from '../../shared/Error';
import { EmptySearchContent } from '../../shared/EmptySearchContent';
import { BirthdaySeparator } from '../../features/BirthdaySeparator';

export const MainContent: FC = () => {
  const {
    filteredUsers,
    error,
    isLoading,
    isFetching,
    refetch,
    currentSorting,
  } = useUsersData();

  const renderUserCards = (users: User[]) =>
    users.map(user => (
      <UserCard
        key={user.id}
        id={user.id}
        avatar={user.avatarUrl}
        department={user.department}
        name={`${user.firstName} ${user.lastName}`}
        nickName={user.userTag.toLowerCase()}
      />
    ));

  const isBirthdaySorting = !Array.isArray(filteredUsers);

  return (
    <ContentWrapper>
      {isLoading || isFetching ? (
        Array.from({
          length: !isBirthdaySorting ? filteredUsers?.length : 10,
        }).map((_, index) => <ContentSkeleton key={index} />)
      ) : error ? (
        <Error onRetry={refetch} />
      ) : currentSorting === 'alphabet' && !isBirthdaySorting ? (
        filteredUsers?.length === 0 ? (
          <EmptySearchContent />
        ) : (
          renderUserCards(filteredUsers)
        )
      ) : currentSorting === 'birthday' && isBirthdaySorting ? (
        (filteredUsers?.birthdayThisYear.length ||
          filteredUsers?.birthdayNextYear.length) === 0 ? (
          <EmptySearchContent />
        ) : (
          <>
            {renderUserCards(filteredUsers?.birthdayThisYear || [])}
            {filteredUsers.birthdayNextYear.length ||
            filteredUsers.birthdayThisYear.length ? (
              <BirthdaySeparator />
            ) : (
              <></>
            )}
            {renderUserCards(filteredUsers?.birthdayNextYear || [])}
          </>
        )
      ) : (
        <></>
      )}
    </ContentWrapper>
  );
};
