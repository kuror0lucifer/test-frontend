import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ButtonProps } from './props.type';

export const CloseButton = styled.button.attrs<Partial<ButtonProps>>({})`
  position: ${props => (props.$position ? props.$position : 'static')};
  top: ${props => (props.$top ? `${props.$top}px` : '0')};
  right: ${props => (props.$right ? `${props.$right}px` : '0')};
  width: 24px;
  height: 24px;
  background-color: #f7f7f8;
  border-radius: 12px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background-color ease-in-out;

  &:hover {
    background-color: #ececec;
  }
`;

export const Icon = styled.img.attrs<ImgHTMLAttributes<HTMLImageElement>>({})`
  width: 10px;
  height: 10px;
`;

export const BackButton = styled.button.attrs<Partial<ButtonProps>>({})`
  position: ${props => (props.$position ? props.$position : 'static')};
  top: ${props => (props.$top ? `${props.$top}px` : '0')};
  right: ${props => (props.$right ? `${props.$right}px` : '0')};
  left: ${props => (props.$left ? `${props.$left}px` : '0')};
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
    background-color: #ececec;
    transition: background-color 0.3s ease-in-out;
  }
`;

export const OptionButtonText = styled.span``;

export const OptionButton = styled.button.attrs<Partial<ButtonProps>>({})`
  position: ${props => (props.$position ? props.$position : 'static')};
  right: ${props => (props.$right ? `${props.$right}px` : '0')};
  bottom: ${props => (props.$bottom ? `${props.$bottom}px` : '0')};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  border: none;
  background-color: #ececec;
  cursor: pointer;

  font-size: 18px;
  font-weight: 600;

  z-index: 10000;

  transform: translateY(100px);
  transition: background-color 0.3s ease-in-out;
  animation: appearance 0.6s ease-in;
  animation-fill-mode: forwards;

  @keyframes appearance {
    from {
      transform: translateY(100px);
    }
    to {
      transform: translateY(0);
    }
  }

  &:hover {
    background-color: #d9d9d9;
  }
`;
