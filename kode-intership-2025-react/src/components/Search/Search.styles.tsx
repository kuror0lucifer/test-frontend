import { ImgHTMLAttributes, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export const SearchContainer = styled.div`
  max-width: 100%;
  height: auto;
  padding: 6px 16px;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 8px 12px 8px 12px;

  background-color: #f7f7f8;
  border-radius: 16px;
`;

export const Input = styled.input.attrs<InputHTMLAttributes<HTMLInputElement>>({
  type: 'text',
  placeholder: 'Введите имя, тег, почту...',
})`
  width: 100%;
  height: auto;
  background-color: transparent;
  border: none;
  outline: none;

  &::placeholder {
    color: #c3c3c6;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
  }
`;

export const Icon = styled.img.attrs<ImgHTMLAttributes<HTMLImageElement>>({})`
  width: ${props => props.sizes}px;
  height: ${props => props.sizes}px;
`;
