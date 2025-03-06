import { FC } from 'react';
import {
  ContentWrapper,
  EmptySearchAdvice,
  EmptySearchContainer,
  EmptySearchMessage,
  Icon,
} from './EmptySearchContent.styles';
import baseUrl from '../../constants/baseUrl';

interface EmptySearchContentProps {
  message: string;
  advice: string;
}

export const EmptySearchContent: FC<Partial<EmptySearchContentProps>> = ({
  message = 'Мы никого не нашли',
  advice = 'Попробуй скорректировать запрос',
}) => {
  return (
    <ContentWrapper>
      <Icon src={`${baseUrl}/magnifying-glass.svg`} />
      <EmptySearchContainer>
        <EmptySearchMessage>{message}</EmptySearchMessage>
        <EmptySearchAdvice>{advice}</EmptySearchAdvice>
      </EmptySearchContainer>
    </ContentWrapper>
  );
};
