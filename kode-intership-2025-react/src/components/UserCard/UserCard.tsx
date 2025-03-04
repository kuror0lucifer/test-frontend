import { FC } from 'react';
import {
  UserAvatar,
  UserContentContainer,
  UserNameContainer,
  UserText,
  UserWrapper,
} from './UserCard.styles';

interface UserCardProps {
  avatar: string;
  name: string;
  nickName: string;
  department: string;
}

export const UserCard: FC<UserCardProps> = ({
  avatar,
  name,
  nickName,
  department,
}) => {
  return (
    <UserWrapper>
      <UserAvatar
        src={avatar}
        alt={name}
      />
      <UserContentContainer>
        <UserNameContainer>
          <UserText
            color='#050510'
            fontSize={16}
            $lineHeight={20}
            fontWeight={500}
          >
            {name}
          </UserText>
          <UserText
            color='#97979B'
            fontSize={14}
            $lineHeight={18}
            fontWeight={500}
          >
            {nickName}
          </UserText>
        </UserNameContainer>
        <UserText
          color='#55555C'
          fontSize={13}
          $lineHeight={16}
          fontWeight={400}
        >
          {department}
        </UserText>
      </UserContentContainer>
    </UserWrapper>
  );
};
