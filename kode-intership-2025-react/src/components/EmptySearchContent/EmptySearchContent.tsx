import { FC } from 'react';
import {
  ContentWrapper,
  EmptySearchAdvice,
  EmptySearchContainer,
  EmptySearchMessage,
  Icon,
} from './EmptySearchContent.styles';
import baseUrl from '../../constants/baseUrl';
import { useTranslation } from 'react-i18next';

export const EmptySearchContent: FC = () => {
  const { t } = useTranslation();

  return (
    <ContentWrapper>
      <Icon src={`${baseUrl}/magnifying-glass.svg`} />
      <EmptySearchContainer>
        <EmptySearchMessage>{t('emptySearchMessage')}</EmptySearchMessage>
        <EmptySearchAdvice>{t('emptySearchAdvice')}</EmptySearchAdvice>
      </EmptySearchContainer>
    </ContentWrapper>
  );
};
