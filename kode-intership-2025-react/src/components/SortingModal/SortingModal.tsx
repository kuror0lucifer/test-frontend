import { FC } from 'react';
import ReactDOM from 'react-dom';
import {
  InputContent,
  InputLabel,
  Modal,
  ModalContent,
  ModalTitle,
  Radio,
  Wrapper,
} from './SortingModal.styles';
import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentSorting } from '../../redux/sorting/selectors';
import { setSorting } from '../../redux/sorting/slice';
import { useTranslation } from 'react-i18next';

interface SortingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SortingModal: FC<Partial<SortingModalProps>> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentSorting = useSelector(selectCurrentSorting);
  if (!isOpen) return null;

  const handleWrapperClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  const handleSortingChange = (sorting: 'alphabet' | 'birthday') => {
    dispatch(setSorting(sorting));
  };

  return ReactDOM.createPortal(
    isOpen && (
      <Wrapper onClick={handleWrapperClick}>
        <Modal>
          <ModalContent>
            <ModalTitle>{t('sorting')}</ModalTitle>
            <Button
              onClose={onClose}
              position='absolute'
              top={24}
              right={24}
              variant='close'
            />
            <InputContent>
              <Radio
                checked={currentSorting === 'alphabet'}
                onChange={() => handleSortingChange('alphabet')}
              />
              <InputLabel onClick={() => handleSortingChange('alphabet')}>
                {t('alphabetically')}
              </InputLabel>
            </InputContent>
            <InputContent>
              <Radio
                checked={currentSorting === 'birthday'}
                onChange={() => handleSortingChange('birthday')}
              />
              <InputLabel onClick={() => handleSortingChange('birthday')}>
                {t('by_birthday')}
              </InputLabel>
            </InputContent>
          </ModalContent>
        </Modal>
      </Wrapper>
    ),
    document.body
  );
};
