import { FC } from 'react';
import { BackButton, CloseButton, OptionButton } from './Button.styles';
import { BackArrowIcon, CloseButtonIcon } from '../Icons';
import { FaRegMoon } from 'react-icons/fa';
import { FaRegSun } from 'react-icons/fa';
import { ButtonProps } from './props.type';

export const Button: FC<Partial<ButtonProps>> = ({
  onClose,
  onClick,
  variant,
  lang,
  themeMode,
  ...styleProps
}) => {
  return (
    <>
      {variant === 'close' && (
        <CloseButton
          {...styleProps}
          onClick={onClose}
        >
          <CloseButtonIcon color='#C3C3C6' />
        </CloseButton>
      )}
      {variant === 'back' && (
        <BackButton
          {...styleProps}
          onClick={onClick}
        >
          <BackArrowIcon />
        </BackButton>
      )}
      {variant === 'translate' && (
        <OptionButton
          {...styleProps}
          onClick={onClick}
        >
          <span>{lang === 'en' ? 'EN' : 'RU'}</span>
        </OptionButton>
      )}
      {variant === 'themes' && (
        <OptionButton
          {...styleProps}
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
