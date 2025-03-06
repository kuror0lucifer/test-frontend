import { FC } from 'react';
import {
  ContentWrapper,
  Icon,
  InfoContainer,
  InfoText,
  Wrapper,
} from './ProfileContent.styles';
import formatPhone from '../../utils/formatPhone';
import { useTranslation } from 'react-i18next';
import baseUrl from '../../constants/baseUrl';

interface ProfileContentProps {
  phone: string;
  birthday: string;
  age: number;
}

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
          <Icon src={`${baseUrl}/star.svg`} />
          <InfoText color='#050510'>{birthday}</InfoText>
        </InfoContainer>
        <InfoText color='#97979B'>{t('age', { count: age })}</InfoText>
      </ContentWrapper>
      <ContentWrapper $justifyContent='flex-start'>
        <InfoContainer>
          <Icon src={`${baseUrl}/phone.svg`} />
          <InfoText
            $phone={true}
            color='#050510'
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
