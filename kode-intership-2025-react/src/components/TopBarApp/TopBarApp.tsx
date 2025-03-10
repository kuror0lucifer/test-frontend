import { FC, useEffect, useRef } from 'react';
import {
  TopBarAppContainer,
  TopBarAppText,
  TopBarAppTitle,
} from './TopBarApp.styles';
import { Search } from '../Search';
import { DepartmentTabs } from '../DepartmentTabs';
import { useTranslation } from 'react-i18next';
import { useOnlineStatus } from '../../hooks';

const usePrevious = (value: boolean) => {
  const ref = useRef<boolean>(null);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export const TopBarApp: FC = () => {
  const { t } = useTranslation();

  const { isOnline, isLoading, handleDataFetch } = useOnlineStatus();

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

  if (isLoading) {
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
