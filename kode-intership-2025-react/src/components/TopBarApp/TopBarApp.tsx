import { FC, useEffect, useState, useRef } from 'react';
import {
  TopBarAppContainer,
  TopBarAppText,
  TopBarAppTitle,
} from './TopBarApp.styles';
import { Search } from '../Search';
import { DepartmentTabs } from '../DepartmentTabs';
import { useTranslation } from 'react-i18next';

const usePrevious = (value: boolean) => {
  const ref = useRef<boolean>(null);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export const TopBarApp: FC = () => {
  const { t } = useTranslation();

  const [isOffline, setIsOffline] = useState<boolean>(!navigator.onLine);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const prevIsOffline = usePrevious(isOffline);

  const updateOnlineStatus = () => {
    setIsOffline(!navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  useEffect(() => {
    if (prevIsOffline === true && isOffline === false) {
      handleDataFetch();
    }
  }, [isOffline, prevIsOffline]);

  const handleDataFetch = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return isOffline ? (
    <>
      <TopBarAppContainer $bgColor='#F44336'>
        <TopBarAppTitle color='white'>{t('search')}</TopBarAppTitle>
        <TopBarAppText>{t('noInternet')}</TopBarAppText>
      </TopBarAppContainer>
      <DepartmentTabs />
    </>
  ) : isLoading ? (
    <>
      <TopBarAppContainer $bgColor='#6534FF'>
        <TopBarAppTitle color='white'>{t('search')}</TopBarAppTitle>
        <TopBarAppText>{t('loadingData')}</TopBarAppText>
      </TopBarAppContainer>
      <DepartmentTabs />
    </>
  ) : (
    <>
      <TopBarAppContainer>
        <TopBarAppTitle>{t('search')}</TopBarAppTitle>
        <Search />
        <DepartmentTabs />
      </TopBarAppContainer>
    </>
  );
};
