import { FC, useEffect, useState } from 'react';
import { Input, SearchContainer, SearchWrapper } from './Search.styles';
import { SortingModal } from '../SortingModal';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../../redux/users/selectors';
import { setFilteredUsers } from '../../redux/users/slice';
import { setSorting } from '../../redux/sorting/slice';
import { selectCurrentSorting } from '../../redux/sorting/selectors';
import { useTranslation } from 'react-i18next';
import { SearchGlass } from '../Icons';
import { SortingIcon } from '../Icons';

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
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState<boolean>(false);

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

  useEffect(() => {
    if (currentSorting === 'birthday') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [currentSorting]);

  return (
    <>
      <SearchContainer>
        <SearchWrapper>
          <SearchGlass />
          <Input
            {...register('query', { required: false })}
            placeholder={t('placeholder')}
          />
          <SortingIcon
            onClick={openModal}
            isActive={isActive}
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
