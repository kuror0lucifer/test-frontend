import { FC } from 'react';
import {
  NotFoundAdvice,
  NotFoundError,
  StyledLink,
  Wrapper,
} from './NotFound.styles';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/Button';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../hooks';
import themes from '../../constants/themes';
import { TbError404 } from 'react-icons/tb';

export const NotFound: FC = () => {
  const { i18n, t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const toggleLang = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <Wrapper>
        <TbError404
          size={100}
          color='red'
        />
        <NotFoundError> {t('notFoundMain')}</NotFoundError>
        <NotFoundAdvice>
          {t('notFoundAdditional')}
          <StyledLink to={'/'}> {t('notFoundLink')}</StyledLink>
        </NotFoundAdvice>
        <Button
          variant='themes'
          $bottom={40}
          $right={100}
          $position='fixed'
          onClick={toggleTheme}
          themeMode={theme}
        />
        <Button
          variant='translate'
          $bottom={40}
          $right={40}
          $position='fixed'
          lang={i18n.language}
          onClick={() => toggleLang()}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
