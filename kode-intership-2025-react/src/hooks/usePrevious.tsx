import { useEffect, useRef } from 'react';

export const usePrevious = (value: boolean) => {
  const ref = useRef<boolean>(null);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
