import { ButtonHTMLAttributes } from 'react';

export interface CloseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  $position?: string;
  $top?: number;
  $right?: number;
}
