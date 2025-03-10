import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ButtonProps } from './props.type';

export const CloseButton = styled.button.attrs<Partial<ButtonProps>>({})`
  position: ${props => (props.$position ? props.$position : 'static')};
  top: ${props => (props.$top ? `${props.$top}px` : '0')};
  right: ${props => (props.$right ? `${props.$right}px` : '0')};
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.button.primary};
  border-radius: 12px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.button.additional};
  }
`;

export const Icon = styled.img.attrs<ImgHTMLAttributes<HTMLImageElement>>({})`
  width: 10px;
  height: 10px;
`;

export const BackButton = styled.button.attrs<Partial<ButtonProps>>({})`
  position: ${({ $position }) => ($position ? $position : 'static')};
  top: ${({ $top }) => ($top ? `${$top}px` : '0')};
  right: ${({ $right }) => ($right ? `${$right}px` : '0')};
  left: ${({ $left }) => ($left ? `${$left}px` : '0')};
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.button.additional};
    transition: background-color 0.3s ease-in-out;
  }
`;

export const OptionButtonText = styled.span``;

export const OptionButton = styled.button.attrs<Partial<ButtonProps>>({})`
  position: ${({ $position }) => ($position ? $position : 'static')};
  right: ${({ $right }) => ($right ? `${$right}px` : '0')};
  bottom: ${({ $bottom }) => ($bottom ? `${$bottom}px` : '0')};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #ececec;
  cursor: pointer;

  z-index: 10000;

  transition: background-color 0.5s ease-in-out;
  animation: appearance 0.6s ease-in;

  @keyframes appearance {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  span {
    font-size: 18px;
    font-weight: 600;
    color: #050510;
  }

  &:hover {
    background-color: #d9d9d9;
  }
`;
