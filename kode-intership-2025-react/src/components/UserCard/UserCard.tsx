import { FC, useEffect, useState } from 'react';
import {
  StyledLink,
  UserAvatar,
  UserContentContainer,
  UserNameContainer,
  UserText,
  UserWrapper,
} from './UserCard.styles';
import { departments } from '../../types/departments.type';
import blankAvatar from '../../constants/blankAvatar';
import { useTranslation } from 'react-i18next';
import formatDepartmentsEN from '../../utils/formatDepartmentsEN';
import { UserCardProps } from './props.type';

export const UserCard: FC<UserCardProps> = ({
  id,
  avatar,
  name,
  nickName,
  department,
}) => {
  const [imgSrc, setImgSrc] = useState<string | null>(blankAvatar);
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  useEffect(() => {
    const img = new Image();
    img.src = avatar;
    img.onload = () => setImgSrc(avatar);
    img.onerror = () => setImgSrc(blankAvatar);
  }, [avatar]);

  return (
    <StyledLink to={`/user/${id}`}>
      <UserWrapper>
        <UserAvatar
          src={imgSrc || blankAvatar}
          alt={name}
        />
        <UserContentContainer>
          <UserNameContainer>
            <UserText
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
            {currentLocale === 'en'
              ? formatDepartmentsEN(department)
              : departments[department]}
          </UserText>
        </UserContentContainer>
      </UserWrapper>
    </StyledLink>
  );
};
