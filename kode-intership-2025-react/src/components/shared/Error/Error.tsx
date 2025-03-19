import { FC } from 'react';
import {
  ContentWrapper,
  ErrorContainer,
  ErrorMessage,
  ErrorText,
  Icon,
} from './Error.styles';
import { useTranslation } from 'react-i18next';
import { ErrorProps } from './props.type';
import baseUrl from '../../../constants/baseUrl';

export const Error: FC<Partial<ErrorProps>> = ({ onRetry }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    if (onRetry) {
      onRetry();
    }
  };

  return (
    <ContentWrapper>
      <Icon src={`${baseUrl}/ufo.svg`} />
      <ErrorContainer>
        <ErrorMessage>{t('criticalErrorMessage')}</ErrorMessage>
        <ErrorText
          $lineHeight={20}
          fontWeight={400}
          color='#97979B'
          size={16}
        >
          {t('criticalErrorText')}
        </ErrorText>
        <ErrorText
          $lineHeight={20}
          fontWeight={600}
          color='#6534FF'
          size={16}
          cursor='pointer'
          onClick={handleClick}
        >
          {t('criticalErrorReload')}
        </ErrorText>
      </ErrorContainer>
    </ContentWrapper>
  );
};
