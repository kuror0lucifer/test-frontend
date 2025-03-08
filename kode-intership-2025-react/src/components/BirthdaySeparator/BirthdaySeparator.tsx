import { FC } from 'react';
import {
  LineSeparator,
  TextSeparator,
  Wrapper,
} from './BirtdaySeparator.styles';

export const BirthdaySeparator: FC = () => {
  const nextYear = new Date().getFullYear();

  return (
    <Wrapper>
      <LineSeparator />
      <TextSeparator>{nextYear + 1}</TextSeparator>
      <LineSeparator />
    </Wrapper>
  );
};
