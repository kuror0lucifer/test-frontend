import { FC } from 'react';
import {
  ContentWrapper,
  ErrorContainer,
  ErrorMessage,
  ErrorText,
  Icon,
} from './Error.styles';

interface ErrorProps {
  message: string;
  text: string;
  reloadText: string;
  onRetry: () => void;
  isFetching: boolean;
}

export const Error: FC<Partial<ErrorProps>> = ({
  message = 'Какой-то сверхразум все сломал',
  text = 'Постараемся быстро починить',
  reloadText = 'Попробовать снова',
  onRetry,
}) => {
  const handleClick = () => {
    if (onRetry) {
      onRetry();
    }
  };

  return (
    <ContentWrapper>
      <Icon src='/ufo.svg' />
      <ErrorContainer>
        <ErrorMessage>{message}</ErrorMessage>
        <ErrorText
          $lineHeight={20}
          fontWeight={400}
          color='#97979B'
          size={16}
        >
          {text}
        </ErrorText>
        <ErrorText
          $lineHeight={20}
          fontWeight={600}
          color='#6534FF'
          size={16}
          cursor='pointer'
          onClick={handleClick}
        >
          {reloadText}
        </ErrorText>
      </ErrorContainer>
    </ContentWrapper>
  );
};
