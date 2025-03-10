import { ImgHTMLAttributes } from 'react';

export interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  cursor?: string;
}

export interface IFormInputs {
  query: string;
}
