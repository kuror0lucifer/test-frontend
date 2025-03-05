import { FC, useEffect, useState } from 'react';
import {
  Form,
  Icon,
  Input,
  SearchContainer,
  SearchWrapper,
} from './Search.styles';
import { SortingModal } from '../SortingModal';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../../redux/users/selectors';
import { selectActiveTab } from '../../redux/activeTab/selectors';
import { setFilteredUsers } from '../../redux/users/slice';

interface IFormInputs {
  query: string;
}

export const Search: FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
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
          <Input {...register('query', { required: false })} />
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
