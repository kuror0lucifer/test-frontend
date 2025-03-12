import { useQuery } from '@tanstack/react-query';
import { useState, useEffect, useCallback } from 'react';
import { fetchAllUsers } from '../api/service';

export const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [wasOffline, setWasOffline] = useState<boolean>(false);

  const { refetch, isFetching } = useQuery({
    queryKey: ['users'],
    queryFn: fetchAllUsers,
    refetchIntervalInBackground: true,
  });

  const updateOnlineStatus = () => {
    setIsOnline(navigator.onLine);
    if (navigator.onLine) {
      setWasOffline(true);
    }
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
    setIsLoading(isFetching);
  }, [isFetching]);

  useEffect(() => {
    if (!isFetching && wasOffline && isLoading) {
      setWasOffline(false);
    }
  }, [isFetching, wasOffline, isLoading]);

  const handleDataFetch = useCallback(() => {
    setIsLoading(true);
    refetch();
  }, [refetch]);

  return { isOnline, isLoading, wasOffline, handleDataFetch };
};
