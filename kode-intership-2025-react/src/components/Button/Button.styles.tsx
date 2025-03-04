import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { CloseButtonProps } from './props.type';

export const CloseButton = styled.button.attrs<CloseButtonProps>({})`
  position: ${props => (props.position ? props.position : 'static')};
  top: ${props => (props.top ? `${props.top}px` : '0')};
  right: ${props => (props.right ? `${props.right}px` : '0')};
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
