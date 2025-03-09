import { FC, useEffect, useState } from 'react';
import {
  StyledLink,
  UserAvatar,
  UserContentContainer,
  UserNameContainer,
  UserText,
  UserWrapper,
} from './UserCard.styles';
import { departments, DepartmentsKeys } from '../../types/departments';
import blankAvatar from '../../constants/blankAvatar';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import formatDepartmentsEN from '../../utils/formatDepartmentsEN';

interface UserCardProps {
  id: string;
  avatar: string;
  name: string;
  nickName: string;
  department: DepartmentsKeys;
}

export const UserCard: FC<UserCardProps> = ({
  id,
  avatar,
  name,
  nickName,
  department,
}) => {
  const [imgSrc, setImgSrc] = useState<string | null>(blankAvatar);
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  useEffect(() => {
    const img = new Image();
    img.src = avatar;
    img.onload = () => setImgSrc(avatar);
    img.onerror = () => setImgSrc(blankAvatar);
  }, [avatar]);

  const handleClick = () => {
    navigate(`/user/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <StyledLink
      to={`/user/${id}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <UserWrapper onClick={handleClick}>
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
