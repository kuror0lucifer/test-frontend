import { FC, useEffect, useState } from 'react';
import {
  UserAvatar,
  UserContentContainer,
  UserNameContainer,
  UserText,
  UserWrapper,
} from './UserCard.styles';
import { departments, DepartmentsKeys } from '../../types/departments';
import blankAvatar from '../../constants/blankAvatar';

interface UserCardProps {
  avatar: string;
  name: string;
  nickName: string;
  department: DepartmentsKeys;
}

export const UserCard: FC<UserCardProps> = ({
  avatar,
  name,
  nickName,
  department,
}) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = avatar;
    img.onload = () => setImgSrc(avatar);
    img.onerror = () => setImgSrc(blankAvatar);
  }, [avatar]);

  return (
    <UserWrapper>
      <UserAvatar
        src={imgSrc || blankAvatar}
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
          {departments[department]}
        </UserText>
      </UserContentContainer>
    </UserWrapper>
  );
};
