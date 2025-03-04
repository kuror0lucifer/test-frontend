import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #05051029;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  width: 373px;
  height: auto;
  background-color: white;
  padding-bottom: 8px;
  border-radius: 20px;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 24px 16px 0 16px;
  display: flex;
  justify-content: baseline;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
`;

export const ModalTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #050510;
  align-self: center;
  margin-bottom: 16px;
`;

export const Radio = styled.input.attrs<InputHTMLAttributes<HTMLInputElement>>({
  type: 'radio',
})`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #6534ff;
  transition: 0.2s all ease-in;
  cursor: pointer;

  &:checked {
    border: 6px solid #6534ff;
  }
`;

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #050510;
`;

export const InputContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: baseline;
  align-items: center;
  gap: 10px;
  padding-bottom: 21px;
`;
