import { FC } from 'react';
import { TopBarAppContainer, TopBarAppTitle } from './TopBarApp.styles';
import { Search } from '../Search';
import { DepartmentTabs } from '../DepartmentTabs';
import { useTranslation } from 'react-i18next';

export const TopBarApp: FC = () => {
  const { t } = useTranslation();

  return (
    <TopBarAppContainer>
      <TopBarAppTitle>{t('search')}</TopBarAppTitle>
      <Search />
      <DepartmentTabs />
    </TopBarAppContainer>
  );
};
