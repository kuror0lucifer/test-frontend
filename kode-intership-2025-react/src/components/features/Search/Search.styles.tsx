import { InputHTMLAttributes } from 'react';
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

  background-color: ${({ theme }) => theme.search.background};
  transition: background-color 0.3s ease-in-out;
  border-radius: 16px;
`;

export const Input = styled.input.attrs<InputHTMLAttributes<HTMLInputElement>>({
  type: 'text',
})`
  width: 100%;
  height: auto;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.search.textPrimary};
  transition: color 0.3s ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.search.placeholderPrimary};
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    transition: color 0.3s ease-in-out;
  }

  &:focus {
    caret-color: #6534ff;
  }
`;
