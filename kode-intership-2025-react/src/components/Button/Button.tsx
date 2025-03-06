import { FC } from 'react';
import { BackButton, CloseButton, Icon, OptionButton } from './Button.styles';
import baseUrl from '../../constants/baseUrl';
interface ButtonProps {
  position: string;
  top: number;
  right: number;
  left: number;
  bottom: number;
  onClose: () => void;
  onClick: () => void;
  variant: 'back' | 'close' | 'translate';
  lang: string;
}

export const Button: FC<Partial<ButtonProps>> = ({
  position,
  top,
  right,
  left,
  bottom,
  onClose,
  onClick,
  variant,
  lang,
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
          <Icon src={`${baseUrl}/close-button.svg`} />
        </CloseButton>
      )}
      {variant === 'back' && (
        <BackButton
          $position={position}
          $top={top}
          $left={left}
          onClick={onClick}
        >
          <Icon src={`${baseUrl}/back-arrow.svg`} />
        </BackButton>
      )}
      {variant === 'translate' && (
        <OptionButton
          $position={position}
          $bottom={bottom}
          $right={right}
          onClick={onClick}
        >
          {lang === 'en' ? 'EN' : 'RU'}
        </OptionButton>
      )}
    </>
  );
};
