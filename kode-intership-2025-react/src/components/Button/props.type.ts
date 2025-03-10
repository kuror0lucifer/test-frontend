import { ButtonHTMLAttributes } from 'react';
import ThemeType from '../../types/theme.type';

export interface StyleProps {
  $position: string;
  $top: number;
  $right: number;
  $left: number;
  $bottom: number;
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Partial<StyleProps> {
  onClose: () => void;
  onClick: () => void;
  variant: 'back' | 'close' | 'translate' | 'themes';
  lang: string;
  themeMode: ThemeType;
}
