import { FC, useState } from 'react';
import { Icon, Input, SearchContainer, SearchWrapper } from './Search.styles';
import { SortingModal } from '../SortingModal';

export const Search: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
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
            cursor='pointer'
            onClick={openModal}
          />
        </SearchWrapper>
      </SearchContainer>
      {isOpen && (
        <SortingModal
          onClose={closeModal}
          isOpen={isOpen}
        />
      )}
    </>
  );
};
