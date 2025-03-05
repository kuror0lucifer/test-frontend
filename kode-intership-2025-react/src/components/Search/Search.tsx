import { FC, useEffect, useState } from 'react';
import { Icon, Input, SearchContainer, SearchWrapper } from './Search.styles';
import { SortingModal } from '../SortingModal';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../../redux/users/selectors';
import { setFilteredUsers } from '../../redux/users/slice';
import { setSorting } from '../../redux/sorting/slice';
import { selectCurrentSorting } from '../../redux/sorting/selectors';

interface IFormInputs {
  query: string;
}

export const Search: FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const currentSorting = useSelector(selectCurrentSorting);
  const { register, watch } = useForm<IFormInputs>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchValue = watch('query', '').toLowerCase().trim();

  const searchQuery = () => {
    if (!searchValue) {
      dispatch(setFilteredUsers(users));
      return;
    }

    const filteredUsers = users.filter(
      user =>
        user.firstName.toLowerCase().includes(searchValue) ||
        user.lastName.toLowerCase().includes(searchValue) ||
        user.userTag.toLowerCase().includes(searchValue)
    );

    dispatch(setFilteredUsers(filteredUsers));
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      searchQuery();
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchValue, users]);

  const openModal = () => {
    setIsOpen(true);
    if (currentSorting === null) {
      dispatch(setSorting('alphabet'));
    }
  };
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <SearchContainer>
        <SearchWrapper>
          <Icon
            src='/search.svg'
            sizes='20'
          />
          <Input {...register('query', { required: false })} />
          <Icon
            src={
              currentSorting === 'birthday'
                ? '/sorting-active.svg'
                : '/sorting.svg'
            }
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
