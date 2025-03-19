import { FC } from 'react';
import {
  ContentWrapper,
  InfoContainer,
  InfoText,
  Wrapper,
} from './ProfileContent.styles';
import formatPhone from '../../../utils/formatPhone';
import { useTranslation } from 'react-i18next';
import { PhoneIcon, StarIcon } from '../../ui/Icons';
import { ProfileContentProps } from './props.type';

export const ProfileContent: FC<ProfileContentProps> = ({
  phone,
  birthday,
  age,
}) => {
  const { t } = useTranslation();
  const formatedPhone = formatPhone(phone);

  const handleClickPhone = () => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <Wrapper>
      <ContentWrapper $justifyContent='space-between'>
        <InfoContainer>
          <StarIcon />
          <InfoText>{birthday}</InfoText>
        </InfoContainer>
        <InfoText color='#97979B'>{t('age', { count: age })}</InfoText>
      </ContentWrapper>
      <ContentWrapper $justifyContent='flex-start'>
        <InfoContainer>
          <PhoneIcon />
          <InfoText
            $phone={true}
            cursor='pointer'
            onClick={handleClickPhone}
          >
            {formatedPhone}
          </InfoText>
        </InfoContainer>
      </ContentWrapper>
    </Wrapper>
  );
};
