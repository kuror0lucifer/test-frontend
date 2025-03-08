import { FC } from 'react';
import { BackButton, CloseButton, OptionButton } from './Button.styles';
import { BackArrowIcon, CloseButtonIcon } from '../Icons';
import ThemeType from '../../types/theme.type';
import { FaRegMoon } from 'react-icons/fa';
import { FaRegSun } from 'react-icons/fa';

interface ButtonProps {
  position: string;
  top: number;
  right: number;
  left: number;
  bottom: number;
  onClose: () => void;
  onClick: () => void;
  variant: 'back' | 'close' | 'translate' | 'themes';
  lang: string;
  themeMode: ThemeType;
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
  themeMode,
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
          <CloseButtonIcon color='#C3C3C6' />
        </CloseButton>
      )}
      {variant === 'back' && (
        <BackButton
          $position={position}
          $top={top}
          $left={left}
          onClick={onClick}
        >
          <BackArrowIcon />
        </BackButton>
      )}
      {variant === 'translate' && (
        <OptionButton
          $position={position}
          $bottom={bottom}
          $right={right}
          onClick={onClick}
        >
          <span>{lang === 'en' ? 'EN' : 'RU'}</span>
        </OptionButton>
      )}
      {variant === 'themes' && (
        <OptionButton
          $position={position}
          $bottom={bottom}
          $right={right}
          onClick={onClick}
        >
          {themeMode === 'dark' ? (
            <FaRegMoon
              size={20}
              color='black'
            />
          ) : (
            <FaRegSun
              size={20}
              color='black'
            />
          )}
        </OptionButton>
      )}
    </>
  );
};
