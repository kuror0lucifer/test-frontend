import { FC } from 'react';
import { Icon, Input, SearchContainer, SearchWrapper } from './Search.styles';

export const Search: FC = () => {
  return (
    <SearchContainer>
      <SearchWrapper>
        <Icon
          src='/search.svg'
          sizes='20'
        />
        <Input />
        <Icon
          src='/sorting.svg'
          sizes='24'
        />
      </SearchWrapper>
    </SearchContainer>
  );
};
