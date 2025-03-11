import { FC, useCallback, useEffect, useState } from 'react';
import { Input, SearchContainer, SearchWrapper } from './Search.styles';
import { SortingModal } from '../SortingModal';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setSorting } from '../../redux/sorting/slice';
import { selectCurrentSorting } from '../../redux/sorting/selectors';
import { useTranslation } from 'react-i18next';
import { SearchGlass } from '../Icons';
import { SortingIcon } from '../Icons';
import { IFormInputs } from './props.type';
import { useSearch } from '../../hooks';

export const Search: FC = () => {
  const { register, setValue, watch } = useForm<IFormInputs>();
  const searchValue = watch('query', '').toLowerCase().trim();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const currentSorting = useSelector(selectCurrentSorting);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isActive = currentSorting === 'birthday';

  const { queryFromUrl } = useSearch(searchValue);

  useEffect(() => {
    if (queryFromUrl) {
      setValue('query', queryFromUrl);
    }
  }, [queryFromUrl]);

  const openModal = useCallback(() => {
    setIsOpen(true);
    if (currentSorting === null) {
      dispatch(setSorting('alphabet'));
    }
  }, [currentSorting, dispatch]);

  const closeModal = useCallback(() => setIsOpen(false), []);

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
