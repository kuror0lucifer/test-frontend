import { FC } from 'react';
import { TopBarAppContainer, TopBarAppTitle } from './TopBarApp.styles';
import { Search } from '../Search';
import { DepartmentTabs } from '../DepartmentTabs';

interface TopBapAppProps {
  title?: string;
}

export const TopBarApp: FC<TopBapAppProps> = ({ title = 'Поиск' }) => {
  return (
    <TopBarAppContainer>
      <TopBarAppTitle>{title}</TopBarAppTitle>
      <Search />
      <DepartmentTabs />
    </TopBarAppContainer>
  );
};
