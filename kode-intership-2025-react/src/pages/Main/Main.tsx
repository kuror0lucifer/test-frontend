import { FC } from 'react';
import { TopBarApp } from '../../components/TopBarApp';
import { MainContent } from '../../components/MainContent/MainContent';
import { Button } from '../../components/Button';
import { useTranslation } from 'react-i18next';

export const Main: FC = () => {
  const { i18n } = useTranslation();
  const toggleLang = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <TopBarApp />
      <MainContent />
      <Button
        variant='translate'
        bottom={40}
        right={40}
        position='fixed'
        lang={i18n.language}
        onClick={() => toggleLang()}
      />
    </>
  );
};
