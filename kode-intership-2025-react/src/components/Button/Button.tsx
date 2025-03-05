import { FC } from 'react';
import { BackButton, CloseButton, Icon } from './Button.styles';

interface ButtonProps {
  position: string;
  top: number;
  right: number;
  left: number;
  onClose: () => void;
  onClick: () => void;
  variant: 'back' | 'close';
}

export const Button: FC<Partial<ButtonProps>> = ({
  position,
  top,
  right,
  left,
  onClose,
  onClick,
  variant,
}) => {
  return (
    <>
      {variant === 'close' && (
        <CloseButton
          onClick={onClose}
          $position={position}
          $top={top}
          $right={right}
        >
          <Icon src='/close-button.svg' />
        </CloseButton>
      )}
      {variant === 'back' && (
        <BackButton
          $position={position}
          $top={top}
          $right={right}
          $left={left}
          onClick={onClick}
        >
          <Icon src='/back-arrow.svg' />
        </BackButton>
      )}
    </>
  );
};
