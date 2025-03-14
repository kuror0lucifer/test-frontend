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
  background-color: ${({ theme }) => theme.modalPrimary};
  padding-bottom: 8px;
  border-radius: 20px;

  animation: fade-in-scale 0.3s ease-in-out;

  @keyframes fade-in-scale {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 24px 16px 0 16px;
  display: flex;

  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
`;

export const ModalTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: ${({ theme }) => theme.textPrimary};

  transition: color 0.3s ease-in-out;

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
  border: 2px solid ${({ theme }) => theme.optional};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:checked {
    border: 6px solid ${({ theme }) => theme.optional};
  }
`;

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  color: ${({ theme }) => theme.textPrimary};
  transition: color 0.3s ease-in-out;
  cursor: pointer;
`;

export const InputContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  align-items: center;
  gap: 10px;
  padding-bottom: 21px;

  &:hover ${Radio}:not(:checked) {
    border: 3px solid ${({ theme }) => theme.optional};
    transition: border 0.3s ease-in-out;
  }
`;
