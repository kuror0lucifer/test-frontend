import { FC } from 'react';
import {
  ContentWrapper,
  Icon,
  InfoContainer,
  InfoText,
  Wrapper,
} from './ProfileContent.styles';
import formatPhone from '../../utils/formatPhone';
import ageForm from '../../utils/ageForm';

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
  const formatedPhone = formatPhone(phone);
  const formatedAge = ageForm(age);

  const handleClickPhone = () => {
    window.location.href = `tel:+7${phone}`;
  };

  return (
    <Wrapper>
      <ContentWrapper $justifyContent='space-between'>
        <InfoContainer>
          <Icon src='/star.svg' />
          <InfoText color='#050510'>{birthday}</InfoText>
        </InfoContainer>
        <InfoText color='#97979B'>{formatedAge}</InfoText>
      </ContentWrapper>
      <ContentWrapper $justifyContent='flex-start'>
        <InfoContainer>
          <Icon src='/phone.svg' />
          <InfoText
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
