import { FC, useEffect, useState } from 'react';
import { Avatar, Wrapper } from './ProfileHeader.styles';
import { UserContentContainer, UserNameContainer, UserText } from '../UserCard';
import { Button } from '../Button';
import blankAvatar from '../../constants/blankAvatar';
import { departments, DepartmentsKeys } from '../../types/departments';
import { useNavigate } from 'react-router-dom';
import formatDepartmentsEN from '../../utils/formatDepartmentsEN';
import { useTranslation } from 'react-i18next';

interface ProfileHeaderProps {
  fullName: string;
  avatar: string;
  department: DepartmentsKeys;
  nickName: string;
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({
  fullName,
  avatar,
  department,
  nickName,
}) => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    const img = new Image();
    img.src = avatar;
    img.onload = () => setImgSrc(avatar);
    img.onerror = () => setImgSrc(blankAvatar);
  }, [avatar]);

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Button
        position='absolute'
        top={24}
        left={24}
        variant='back'
        onClick={handleClickBack}
      />
      <Avatar
        src={imgSrc || blankAvatar}
        alt={fullName}
      />
      <UserContentContainer
        $gap={12}
        $alignItems='center'
      >
        <UserNameContainer>
          <UserText
            fontSize={24}
            fontWeight={700}
            $lineHeight={28}
          >
            {fullName}
          </UserText>
          <UserText
            fontSize={17}
            fontWeight={400}
            $lineHeight={22}
            color='#97979B'
          >
            {nickName.toLowerCase()}
          </UserText>
        </UserNameContainer>
        <UserText
          fontSize={13}
          fontWeight={400}
          $lineHeight={16}
          color='#55555C'
        >
          {i18n.language === 'en'
            ? formatDepartmentsEN(department)
            : departments[department]}
        </UserText>
      </UserContentContainer>
    </Wrapper>
  );
};
