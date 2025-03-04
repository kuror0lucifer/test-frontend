import { FC } from 'react';
import { TopBarApp } from '../../components/TopBarApp';
import { MainContent } from '../../components/MainContent/MainContent';

export const Main: FC = () => {
  return (
    <>
      <TopBarApp />
      <MainContent />
    </>
  );
};
