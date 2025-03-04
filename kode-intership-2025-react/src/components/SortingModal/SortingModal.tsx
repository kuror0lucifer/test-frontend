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

interface SortingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SortingModal: FC<Partial<SortingModalProps>> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const handleWrapperClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    isOpen && (
      <Wrapper onClick={handleWrapperClick}>
        <Modal>
          <ModalContent>
            <ModalTitle>Сортировка</ModalTitle>
            <Button
              onClose={onClose}
              position='absolute'
              top={24}
              right={24}
            />
            <InputContent>
              <Radio />
              <InputLabel>По алфавиту</InputLabel>
            </InputContent>
            <InputContent>
              <Radio />
              <InputLabel>По дню рождения</InputLabel>
            </InputContent>
          </ModalContent>
        </Modal>
      </Wrapper>
    ),
    document.body
  );
};
