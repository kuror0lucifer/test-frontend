import { FC } from 'react';
import { CloseButton, Icon } from './Button.styles';

interface ButtonProps {
  position: string;
  top: number;
  right: number;
  onClose: () => void;
}

export const Button: FC<Partial<ButtonProps>> = ({
  position,
  top,
  right,
  onClose,
}) => {
  return (
    <CloseButton
      onClick={onClose}
      position={position}
      top={top}
      right={right}
    >
      <Icon src='/close-button.svg' />
    </CloseButton>
  );
};
