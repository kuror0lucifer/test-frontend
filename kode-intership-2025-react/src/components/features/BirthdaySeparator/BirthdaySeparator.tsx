import { FC } from 'react';
import {
  LineSeparator,
  TextSeparator,
  Wrapper,
} from './BirtdaySeparator.styles';

export const BirthdaySeparator: FC = () => {
  const nextYear = new Date().getFullYear() + 1;

  return (
    <Wrapper>
      <LineSeparator />
      <TextSeparator>{nextYear}</TextSeparator>
      <LineSeparator />
    </Wrapper>
  );
};
