import { FC } from 'react';
import { SpinnerContent, SpinnerWrapper } from './Spinner.styles';

export const Spinner: FC = () => {
  return (
    <SpinnerWrapper>
      <SpinnerContent />
    </SpinnerWrapper>
  );
};
