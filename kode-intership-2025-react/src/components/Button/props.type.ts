import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $position: string;
  $top: number;
  $right: number;
  $left: number;
  $bottom: number;
  onClick: () => void;
}
