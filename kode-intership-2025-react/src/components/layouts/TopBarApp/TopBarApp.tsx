import { FC, useEffect } from 'react';
import {
  TopBarAppContainer,
  TopBarAppText,
  TopBarAppTitle,
} from './TopBarApp.styles';
import { useTranslation } from 'react-i18next';
import { useOnlineStatus, usePrevious } from '../../../hooks';
import { DepartmentTabs } from '../../features/DepartmentTabs';
import { Search } from '../../features/Search';

export const TopBarApp: FC = () => {
  const { t } = useTranslation();

  const { isOnline, isLoading, handleDataFetch, wasOffline } =
    useOnlineStatus();

  const prevIsOnline = usePrevious(isOnline);

  useEffect(() => {
    if (prevIsOnline === false && isOnline === true) {
      handleDataFetch();
    }
  }, [isOnline, prevIsOnline, handleDataFetch]);

  if (!isOnline) {
    return (
      <>
        <TopBarAppContainer $bgColor='#F44336'>
          <TopBarAppTitle color='white'>{t('search')}</TopBarAppTitle>
          <TopBarAppText>{t('noInternet')}</TopBarAppText>
        </TopBarAppContainer>
        <DepartmentTabs />
      </>
    );
  }

  if (isLoading && wasOffline) {
    return (
      <>
        <TopBarAppContainer $bgColor='#6534FF'>
          <TopBarAppTitle color='white'>{t('search')}</TopBarAppTitle>
          <TopBarAppText>{t('loadingData')}</TopBarAppText>
        </TopBarAppContainer>
        <DepartmentTabs />
      </>
    );
  }

  return (
    <>
      <TopBarAppContainer>
        <TopBarAppTitle>{t('search')}</TopBarAppTitle>
        <Search />
        <DepartmentTabs />
      </TopBarAppContainer>
    </>
  );
};
