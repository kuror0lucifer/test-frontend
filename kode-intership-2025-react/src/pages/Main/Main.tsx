import { FC } from 'react';
import { TopBarApp } from '../../components/TopBarApp';
import { MainContent } from '../../components/MainContent/MainContent';
import { Button } from '../../components/Button';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../hooks';
import { ThemeProvider } from 'styled-components';
import themes from '../../constants/themes';

export const Main: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { i18n } = useTranslation();
  const toggleLang = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <ThemeProvider theme={themes[theme]}>
      <TopBarApp />
      <MainContent />
      <Button
        variant='themes'
        bottom={40}
        right={100}
        position='fixed'
        onClick={toggleTheme}
        themeMode={theme}
      />
      <Button
        variant='translate'
        bottom={40}
        right={40}
        position='fixed'
        lang={i18n.language}
        onClick={() => toggleLang()}
      />
    </ThemeProvider>
  );
};
